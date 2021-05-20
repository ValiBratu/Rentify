using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCoreRelations.Data.Models
{
    public class RentPostPhoto
    {

        public int Id { get; set; }

        [Required]
        [ForeignKey("RentPostId")]
        public int RentPostId { get; set; }
        //public RentPost RentPost { get; set; }

        public string Photo { get; set; }

    }

    public class RentPostPhotosEntityConfiguration : IEntityTypeConfiguration<RentPostPhoto>
    {

        public void Configure(EntityTypeBuilder<RentPostPhoto> builder)
        {


        }
    }
}
