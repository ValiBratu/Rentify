using EFCoreRelations.Data;
using EFCoreRelations.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RentingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentPostPhotosController : ControllerBase
    {

        private readonly RentDBContext _context;

        public RentPostPhotosController(RentDBContext context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentPostPhoto>>> GetRentPostPhotos()
        {

            return await _context.RentPostPhotos.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<RentPostPhoto>> GetRentPostPhoto(int id)
        {
            var rentPhotos = await _context.RentPostPhotos.FindAsync(id);

            if (rentPhotos == null)
            {
                return NotFound();
            }

            return rentPhotos;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhoto(int id, [FromBody] RentPostPhoto rentPhoto)
        {
            if (!_context.RentPostPhotos.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentPost = _context.RentPostPhotos.Single(b => b.Id == id);

                currentPost.Photo = rentPhoto.Photo;

                await _context.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;

            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<RentPostPhoto>> PostPhoto(RentPostPhoto rentPhoto)
        {
            _context.RentPostPhotos.Add(rentPhoto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentPostPhotos", new { id = rentPhoto.Id }, rentPhoto);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<RentPostPhoto>> DeleteRentPhoto(int id)
        {
            var photo = await _context.RentPostPhotos.FindAsync(id);
            if (photo == null)
            {
                return NotFound();
            }

            _context.RentPostPhotos.Remove(photo);
            await _context.SaveChangesAsync();

            return photo;
        }
    }
}
