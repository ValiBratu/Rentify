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
    public class RentPostController : ControllerBase
    {

        private readonly RentDBContext _context;

        public RentPostController(RentDBContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentPost>>> GetRentPosts()
        {
            
            return await _context.RentPosts.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<RentPost>> GetRentPost(int id)
        {
            var rentPosts = await _context.RentPosts.FindAsync(id);

            if (rentPosts == null)
            {
                return NotFound();
            }

            return rentPosts;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentPost(int id, [FromBody] RentPost rentPost)
        {
            if (!_context.RentPosts.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentPost = _context.RentPosts.Single(b => b.Id == id);

                currentPost.Title = rentPost.Title;
                currentPost.Description = rentPost.Description;
                currentPost.Location = rentPost.Location;
                currentPost.Price = rentPost.Price;

                await _context.SaveChangesAsync();
                
            }
            catch (Exception)
            {
                
                throw;

            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<RentPost>> PostRentPost(RentPost rentPost)
        {
            _context.RentPosts.Add(rentPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentPosts", new { id = rentPost.Id }, rentPost);
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<RentPost>> DeleteRentPost(int id)
        {
            var post = await _context.RentPosts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.RentPosts.Remove(post);
            await _context.SaveChangesAsync();

            return post;
        }


        [HttpGet("city/{id}")]
        public async Task<ActionResult<IEnumerable<RentPost>>>RentPostsByCity(int id)
        {
            var rentPosts = _context.RentPosts.ToListAsync();

            if (id == 0)
            {
                return await rentPosts;
            }

            var query = from rentPost in await rentPosts
                        where rentPost.CityId.Equals(id)
                        select rentPost;


            return query.ToList();

        }

    }
}
