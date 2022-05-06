using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XCompany.Data;
using XCompany.Data.Models;

namespace XCompany.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AddressesController : ControllerBase
{
    private readonly ApplicationDbContext _appContext;
    public AddressesController(ApplicationDbContext appContext)
    {
        _appContext = appContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Address>>> GetAll()
    {
        return Ok(await _appContext.Addresses.Include(address => address.Customer).ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Address>> GetById(int id)
    {
        var address = await _appContext.Addresses.Include(address => address.Customer).FirstOrDefaultAsync(address => address.AddressId == id);
        if (address == null)
            return NotFound("The address doesn't exist in the database");
        return Ok(address);
    }

    [HttpPost]
    public async Task<ActionResult<Address>> Post([FromBody] Address Address)
    {
        if (ModelState.IsValid)
        {
            _appContext.Addresses.Add(Address);
            await _appContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = Address.AddressId }, Address);
        }
        else
        {
            return null;
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] Address address)
    {
        try
        {
            var addressToUpdate = _appContext.Addresses.AsNoTracking().FirstOrDefault(customer => customer.AddressId == id);
            if (addressToUpdate == null)
                return NotFound();
            else
            {
                addressToUpdate.Location = address.Location;
                addressToUpdate.CustomerId = address.CustomerId;

                await _appContext.SaveChangesAsync();

                return Ok(addressToUpdate);
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
        var address = await _appContext.Addresses.FindAsync(id);
        if (address == null)
            return NotFound();

        _appContext.Addresses.Remove(address);

        await _appContext.SaveChangesAsync();

        return Ok();
    }
}
