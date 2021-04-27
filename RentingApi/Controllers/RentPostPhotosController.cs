using EFCoreRelations.Data;
using Microsoft.AspNetCore.Mvc;
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




    }
}
