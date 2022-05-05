using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public int AddressId { get; set; }

        public Address Address { get; set; }
    }
}