using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public class WebSocketHandler
{
    private static List<WebSocket> activeSockets = new List<WebSocket>();

    public async Task HandleWebSocketRequest(HttpContext context, WebSocket webSocket)
    {
        activeSockets.Add(webSocket);

        try
        {
            var buffer = new byte[1024];
            WebSocketReceiveResult result;

            while (webSocket.State == WebSocketState.Open)
            {
                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                if (result.MessageType == WebSocketMessageType.Text)
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    Console.WriteLine($"Received message: {message}");

                    foreach (var socket in activeSockets)
                    {
                        if (socket.State == WebSocketState.Open)
                        {
                            await socket.SendAsync(new ArraySegment<byte>(Encoding.UTF8.GetBytes(message), 0, Encoding.UTF8.GetByteCount(message)),
                                WebSocketMessageType.Text, true, CancellationToken.None);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"WebSocket error: {ex.Message}");
        }
        finally
        {
            activeSockets.Remove(webSocket);
            await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closed", CancellationToken.None);
        }
    }
}
