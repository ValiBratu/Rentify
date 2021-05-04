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
    public class UserPhoto
    {

        public int Id { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public string Photo { get; set; }

    }

    public class UserPhotoEntityConfiguration : IEntityTypeConfiguration<UserPhoto>
    {

        public void Configure(EntityTypeBuilder<UserPhoto> builder)
        {


        }
    }
}
