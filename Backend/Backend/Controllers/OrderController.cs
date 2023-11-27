using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Backend.Controllers
{
    public class OrderController: ControllerBase
    {

        [HttpPut("api/order/cancel")]
        public IActionResult CancelOrderByCustomer([FromForm] int orderId)
        {
            try
            {
                using (var cont = new ContextDataBase())
                {
                    var order = cont.orders.FirstOrDefault(o => o.Id == orderId);

                    if (order != null)
                    {
                        order.Status = "Отменен";
                        cont.SaveChanges();
                        return Ok();
                    } else
                    {
                        return NotFound($"Не найден заказ с id: {orderId}");
                    }
                }
            } catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

        [HttpGet("api/order/history")]
        public IActionResult GetLastOrders([FromQuery] int UserId)
        {
            try
            {
                List<OrderDTO> ordersWithProducts = new List<OrderDTO>();
                List<Order> orders = new List<Order>();
                using(var cont = new ContextDataBase())
                {
                    orders = cont.orders
                   .Where(order => order.Customer_Id == UserId)
                   .Include(order => order.ProdLists)
                   .ThenInclude(prodList => prodList.Product)
                   .OrderByDescending(order => order.Date) 
                   .Take(10)
                   .ToList();
                }
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
                } else { 
                    return NoContent(); 
                }
            }
            catch (Exception ex){
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

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
                using(var cont = new ContextDataBase())
                {
                    var products = JsonConvert.DeserializeObject<List<ProductInfo>>(items);

                    var order = new Order
                    {
                        Recipient = checkoutName,
                        Recipient_phone = checkoutPhone,
                        Adres = checkoutAddress,
                        Comment = checkoutComment,
                        Customer_Id = userId,
                        Status = "В обработке",
                        Total = Convert.ToInt32(total),
                        Date = DateTime.Now.AddHours(3),
                    };

                    cont.orders.Add(order);
                    cont.SaveChanges();

                    int newOrderId = order.Id;

                    foreach (var product in products)
                    {
                        var productListEntry = new ProductList
                        {
                            Order_Id = newOrderId,
                            Product_Id = product.id,
                            count = product.count
                        };

                        cont.productLists.Add(productListEntry);
                    }

                    cont.SaveChanges();
                    return Ok();
                }
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }
    }
}
