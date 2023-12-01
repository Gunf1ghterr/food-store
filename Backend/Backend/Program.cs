using Backend;
using Backend.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMemoryCache();
builder.Services.AddScoped<IDbContext, ContextDataBase>();

builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
    builder =>
    {
        builder.WithOrigins("http://localhost:3000");
        //builder.WithOrigins("http://localhost:5000");
        //builder.WithOrigins("http://localhost:5001");
        builder.AllowCredentials();
        builder.AllowAnyMethod();
    }
    )); // Политика корс запрещает серваку работать с неизвестными доменами (ip адрессами), поэтому тут я разрешаю ему работать с локалхост


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();


app.UseWebSockets();
app.Use(async (context, next) =>
{
if (context.WebSockets.IsWebSocketRequest)
{
    if (context.Request.Path == "/notification") {
        var webSocket = await context.WebSockets.AcceptWebSocketAsync();
        var handler = new WebSocketHandler();
        await handler.HandleWebSocketRequest(context, webSocket);
    };
        
    }
    else
    {
        await next();
    }
}); // тут нет роутинга для разных сокетов, так что придется допиливать (да и вряд ли у нас много сокетов будет)
    // upd: вроде добавил роутинг, выглядит кринжово, то должно работать, ща проверять буду
    // upd 2: проверил, работает нормально, так что будем юзать такой подход


app.MapControllers();

app.Run();
