var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
    builder =>
    {
        builder.WithOrigins("http://localhost:3000");
        //builder.WithOrigins("http://localhost:5000");
        //builder.WithOrigins("http://localhost:5001");
        builder.AllowCredentials();
        builder.AllowAnyMethod();
    }
    )); // �������� ���� ��������� ������� �������� � ������������ �������� (ip ���������), ������� ��� � �������� ��� �������� � ���������


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
}); // ��� ��� �������� ��� ������ �������, ��� ��� �������� ���������� (�� � ���� �� � ��� ����� ������� �����)
    // upd: ����� ������� �������, �������� ��������, �� ������ ��������, �� ��������� ����
    // upd 2: ��������, �������� ���������, ��� ��� ����� ����� ����� ������


app.MapControllers();

app.Run();
