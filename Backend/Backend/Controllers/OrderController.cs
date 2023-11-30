using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Backend.Controllers
{
    public class OrderController : ControllerBase
    {
        private readonly IDbContext _dbContext;

        public OrderController(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [CustomAuthorization]
        [HttpPut("api/order/cancel")]
        public IActionResult CancelOrderByCustomer([FromForm] int orderId, [FromForm] int userId)
        {
            try
            {
                var token = Request.Cookies["token"];
                DotNetEnv.Env.Load();
                var secret = Environment.GetEnvironmentVariable("Secret");
                if (token == null)
                {
                    return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
                }
                var userIdClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Name);
                if (userIdClaim.Value != userId.ToString())
                {
                    return Unauthorized("Нет доступа.");
                }

                var order = _dbContext.orders.FirstOrDefault(o => o.Id == orderId && o.Customer_Id == userId);

                if (order != null)
                {
                    order.Status = Statuses.Cancelled;
                    _dbContext.SaveChanges();
                    return Ok();
                }
                else
                {
                    return NotFound($"Не найден заказ с id: {orderId} и customer_id {userId}");
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

        [CustomAuthorization]
        [HttpGet("api/order/history")]
        public IActionResult GetLastOrders([FromQuery] int UserId)
        {
            try
            {
                var token = Request.Cookies["token"];
                DotNetEnv.Env.Load();
                var secret = Environment.GetEnvironmentVariable("Secret");
                if (token == null)
                {
                    return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
                }
                var userIdClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Name);
                if (userIdClaim.Value != UserId.ToString())
                {
                    return Unauthorized("Нет доступа.");
                }
                List<OrderDTO> ordersWithProducts = new List<OrderDTO>();
                List<Order> orders = new List<Order>();

                orders = _dbContext.orders
                .Where(order => order.Customer_Id == UserId)
                .Include(order => order.ProdLists)
                .ThenInclude(prodList => prodList.Product)
                .OrderByDescending(order => order.Date)
                .Take(10)
                .ToList();

                foreach (var order in orders)
                {
                    var orderDTO = new OrderDTO
                    {
                        order = order,
                        items = order.ProdLists
                            .Select(prodList => prodList.Product)
                            .ToList()
                    };

                    ordersWithProducts.Add(orderDTO);
                }
                if (orders.Count > 0)
                {
                    return Ok(ordersWithProducts);
                }
                else
                {
                    return NoContent();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

        [CustomAuthorization]
        [HttpPost("api/order/new")]
        public IActionResult NewOrder(
            [FromForm] string checkoutName,
            [FromForm] string checkoutPhone,
            [FromForm] string checkoutAddress,
            [FromForm] string checkoutComment,
            [FromForm] int userId,
            [FromForm] string total,
            [FromForm] string items
            )
        {
            try
            {
                var token = Request.Cookies["token"];
                DotNetEnv.Env.Load();
                var secret = Environment.GetEnvironmentVariable("Secret");
                if (token == null)
                {
                    return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
                }
                var userIdClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Name);
                if (userIdClaim.Value != userId.ToString())
                {
                    return Unauthorized("Нет доступа.");
                }

                var products = JsonConvert.DeserializeObject<List<ProductInfo>>(items);

                var order = new Order
                {
                    Recipient = checkoutName,
                    Recipient_phone = checkoutPhone,
                    Adres = checkoutAddress,
                    Comment = checkoutComment,
                    Customer_Id = userId,
                    Status = Statuses.Pending,
                    Total = Convert.ToInt32(total),
                    Date = DateTime.Now.AddHours(3),
                };

                _dbContext.orders.Add(order);
                _dbContext.SaveChanges();

                int newOrderId = order.Id;

                foreach (var product in products)
                {
                    var productListEntry = new ProductList
                    {
                        Order_Id = newOrderId,
                        Product_Id = product.id,
                        count = product.count
                    };

                    _dbContext.productLists.Add(productListEntry);
                }
                _dbContext.SaveChanges();
                return Ok();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }
    }
}
