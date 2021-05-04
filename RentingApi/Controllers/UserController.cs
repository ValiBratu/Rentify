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
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly RentDBContext _context;

        public UserController(RentDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
        {

            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Object>> GetUser(string id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            var AllPhotos = _context.UserPhotos;

            var userPhotos = from photo in AllPhotos
                             where photo.UserId == id
                       select photo.Photo;

            string userPhoto = "";

            if (userPhotos.Count() == 1)
            {
                userPhoto = userPhotos.First();
            }

            var userPosts = from post in _context.RentPosts
                            where post.UserId == id
                            select post;

            var query = new {
                Id = user.Id,
                Name = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Photo = userPhoto,
                NumberOfPosts=userPosts.Count()

            };

            return query;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, [FromBody] RegisterModel User)
        {
            if (!_context.Users.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentPost = _context.Users.Single(b => b.Id == id);

                currentPost.UserName = User.Username;
                currentPost.Email = User.Email;
                currentPost.PhoneNumber = User.PhoneNumber;

                await _context.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;

            }

            return NoContent();
        }


        [HttpGet("{id}/rent-posts")]
        public async Task<ActionResult<IEnumerable<RentPost>>> GetUserPosts(string id)
        {

            var posts = await _context.RentPosts.ToListAsync();

            

            var userPosts = from post in posts
                            where post.UserId.Equals(id)
                            select post;

            return userPosts.ToList();


        }



    }
}



