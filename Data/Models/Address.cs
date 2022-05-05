using System.ComponentModel.DataAnnotations;

namespace XCompany.Data.Models
{
    public class Address
    {
        [Key]
        public int AdressId { get; set; }
        public int Client_Id { get; set; }
    }
}