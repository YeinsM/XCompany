using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string AddressLocation { get; set; }
    }
}