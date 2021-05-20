using EFCoreRelations.Data.Models;
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
        public RentPost RentPost { get; set; }

        public IEnumerable<RentPostPhoto> RentPhotos { get; set; }

    }
}
