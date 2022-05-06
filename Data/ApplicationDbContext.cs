using Microsoft.EntityFrameworkCore;
using XCompany.Data.Models;

namespace XCompany.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
			modelBuilder.Entity<Address>()
            .HasOne(customer => customer.Customer)
            .WithMany(address => address.Addresses)
            .HasForeignKey(customerId => customerId.CustomerId)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}