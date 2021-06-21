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
    public class RentPost
    {
        public int Id { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Rooms { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        [ForeignKey("CityId")]
        public int CityId { get; set; }
        public City City { get; set; }


        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public Decimal Price { get; set; }

        public List<RentPostPhoto> RentPostPhotos { get; set; }

    }

    public class RentPostEntityConfiguration : IEntityTypeConfiguration<RentPost>
    {
        public void Configure(EntityTypeBuilder<RentPost> builder)
        {



        }
    }
}
