using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [Required(ErrorMessage = "The first name is required")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "The last name is required")]
        public string LastName { get; set; }
    }
}