using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        [Required]
        public string Location { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}