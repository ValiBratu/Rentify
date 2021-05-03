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
        public async Task<ActionResult<ApplicationUser>> GetUser(string id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutUser(int id, [FromBody] RegisterModel User)
        //{
        //    if (!_context.Users.Any(b => b.Id == id))
        //    {
        //        return BadRequest();
        //    }

        //    try
        //    {
        //        var currentPost = _context.RentPosts.Single(b => b.Id == id);

        //        currentPost.Title = rentPost.Title;
        //        currentPost.Description = rentPost.Description;
        //        currentPost.Location = rentPost.Location;
        //        currentPost.Price = rentPost.Price;

        //        await _context.SaveChangesAsync();

        //    }
        //    catch (Exception)
        //    {

        //        throw;

        //    }

        //    return NoContent();
        //}







    }
}



