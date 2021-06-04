using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCoreRelations.Data.DTOs
{
    public class UserFavoriteDTO
    {
        public int Id { get; set; }

        public string UserId { get; set; }
        public int RentPostId { get; set; }

    }
}
