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
    public class UserPhotoController : ControllerBase
    {

        private readonly RentDBContext _context;

        public UserPhotoController(RentDBContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<ActionResult<UserPhoto>> PostUserPhoto(UserPhoto Photo)
        {
            _context.UserPhotos.Add(Photo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostUserPhoto", new { id = Photo.Id }, Photo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserPhoto(string id, [FromBody] UserPhoto userPhoto)
        {
            if (!_context.UserPhotos.Any(b => b.UserId == id))
            {
                return BadRequest();
            }

            try
            {
                var currentPhoto = _context.UserPhotos.Single(b => b.UserId == id);

                currentPhoto.Photo = userPhoto.Photo;


                await _context.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;

            }

            return NoContent();
        }


    }
}
