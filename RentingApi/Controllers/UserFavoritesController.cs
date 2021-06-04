using EFCoreRelations.Data;
using EFCoreRelations.Data.DTOs;
using EFCoreRelations.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentingApi.Controllers
{
    //[ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserFavoritesController : ControllerBase
    {

        private readonly RentDBContext _context;

        public UserFavoritesController(RentDBContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<ActionResult<UserFavorite>> PostUserFavorite(UserFavorite UserFav)
        {
            _context.UserFavorites.Add(UserFav);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostUserFavorite", new { id = UserFav.Id }, UserFav);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<RentPost>>> GetFavoritePosts(string id)
        {


            var rentPosts = await _context.RentPosts.Include(e => e.RentPostPhotos).ToListAsync();

            var AllFavorites = await _context.UserFavorites.ToListAsync();

            var query = from post in rentPosts
                        join favorite in AllFavorites on post.Id equals favorite.RentPostId
                        where favorite.UserId == id
                        select post;

            return query.ToList();


        }


        [HttpGet("rentPostFavorites/{id}")]
        public async Task<ActionResult<IEnumerable<UserFavorite>>> GetFavoritesForPost(int id)
        {

            var AllFavorites = await _context.UserFavorites.ToListAsync();

            var query = from favorite in AllFavorites
                        where favorite.RentPostId.Equals(id)
                        select favorite;

            return query.ToList();

        }

        [HttpDelete("{userId}/post/{postId}")]
        public async Task<ActionResult<UserFavorite>> DeleteFavorite(string userId,int postId)
        {
            var posts = await _context.UserFavorites.ToListAsync();

            var postToBeDeleted = from post in posts
                                  where post.UserId.Equals(userId) && post.RentPostId.Equals(postId)
                                  select post;

            if (!postToBeDeleted.Any())
            {
                return NotFound();
            }

            _context.UserFavorites.Remove(postToBeDeleted.First());
            await _context.SaveChangesAsync();

            return postToBeDeleted.First();
        }


    }
}
