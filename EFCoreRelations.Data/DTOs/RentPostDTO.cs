using EFCoreRelations.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCoreRelations.Data.DTOs
{
   public  class RentPostDTO
    {
        public int id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string UserId { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public int Rooms { get; set; }
        public string Location { get; set; }
        

        public int CityId { get; set; }
        public string City { get; set; }

        public Decimal Price { get; set; }

    }
}
