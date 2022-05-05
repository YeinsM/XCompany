using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }
        [Required(ErrorMessage = "The first name is required")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "The last name is required")]
        public string LastName { get; set; }
        public List<Address> Addresses { get; set; }
    }
}