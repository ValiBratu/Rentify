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
    public class UserFavorite
    {

        public int Id { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        [ForeignKey("RentPostId")]
        public int RentPostId { get; set; }
        public RentPost RentPost { get; set; }

    }

    public class UserFavoriteEntityConfiguration : IEntityTypeConfiguration<UserFavorite>
    {

        public void Configure(EntityTypeBuilder<UserFavorite> builder)
        {


        }
    }
}