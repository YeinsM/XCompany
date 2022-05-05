using Microsoft.AspNetCore.Mvc;
using XCompany.Data.Models;

namespace XCompany.Controllers;

[ApiController]
[Route("[controller]")]
public class ClientsController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<ClientsController> _logger;

    public ClientsController(ILogger<ClientsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Client> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Client
        {
            // Date = DateTime.Now.AddDays(index),
            // TemperatureC = Random.Shared.Next(-20, 55),
            // Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
