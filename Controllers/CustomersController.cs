using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XCompany.Data;
using XCompany.Data.Models;

namespace XCompany.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    private readonly ApplicationDbContext _appContext;
    public CustomersController(ApplicationDbContext appContext)
    {
        _appContext = appContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Customer>>> GetAll()
    {
        return Ok(await _appContext.Customers.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Customer>> GetById(int id)
    {
        var customer = await _appContext.Customers.FindAsync(id);
        if (customer == null)
            return NotFound("The customer doesn't exist in the database");
        return Ok(customer);
    }

    [HttpPost]
    public async Task<ActionResult<Customer>> Post([FromBody] Customer Customer)
    {
        if (ModelState.IsValid)
        {
            _appContext.Customers.Add(Customer);
            await _appContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = Customer.CustomerId }, Customer);
        }
        else
        {
            return null;
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] Customer customer)
    {
        try
        {
            var customerToUpdate = _appContext.Customers.FirstOrDefault(c => c.CustomerId == id);
            if (customerToUpdate == null)
                return NotFound();
            else
            {
                customerToUpdate.FirstName = customer.FirstName;
                customerToUpdate.LastName = customer.LastName;
                
                await _appContext.SaveChangesAsync();

                return Ok(customerToUpdate);
            }
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var customer = await _appContext.Customers.FindAsync(id);
        if (customer == null)
            return NotFound();

        _appContext.Customers.Remove(customer);

        await _appContext.SaveChangesAsync();

        return Ok();
    }
}
