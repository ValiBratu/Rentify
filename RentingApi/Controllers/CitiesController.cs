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
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {

        private readonly RentDBContext _context;

        public CitiesController(RentDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetCities()
        {

            return await _context.Cities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<City>> GetCityById(int id)
        {
            var city = await _context.Cities.FindAsync(id);

            if (city == null)
            {
                return NotFound();
            }

            return city;
        }
    }
}
