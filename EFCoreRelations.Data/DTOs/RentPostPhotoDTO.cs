using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCoreRelations.Data.DTOs
{
    public class RentPostPhotoDTO
    {
        [Required]
        public int RentPostId { get; set; }

        public string Photo { get; set; }


    }
}
