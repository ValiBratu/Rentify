using EFCoreRelations.Data;
using EFCoreRelations.Data.DTOs;
using EFCoreRelations.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;
using iTextSharp.text.pdf.draw;

namespace RentingApi.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class ExportController : ControllerBase
    {

        private readonly RentDBContext _context;

        public ExportController(RentDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<FileStreamResult> GetPDF(string id)
        {

            var ListOfPosts = await GetRentPostsForPDF(id);

            await using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
            {
                MemoryStream workStream = new MemoryStream();
                Document document = new Document();
                PdfWriter.GetInstance(document, workStream).CloseStream = false;

                Chunk linebreak = new Chunk(new DottedLineSeparator());

                document.Open();
                int postIndex = 0;
                foreach (var post in ListOfPosts)
                {
                    document.Add( new Phrase((postIndex+1)+". Post Details", FontFactory.GetFont("Times New Roman", 18, Font.BOLD)));
                    
                    document.Add(new Paragraph("Title: "+post.Title));
                    document.Add(new Paragraph("Description: " + post.Description));
                    document.Add(new Paragraph("City: " + post.City));
                    document.Add(new Paragraph("Location: " + post.Location));
                    document.Add(new Paragraph("Price: " + post.Price.ToString()+"$"));
                    document.Add(new Phrase("Landlord Details", FontFactory.GetFont("Times New Roman", 16, Font.BOLD)));
                    document.Add(new Paragraph("UserName: " + post.UserName));
                    document.Add(new Paragraph("Email: " + post.Email));
                    document.Add(new Paragraph("Phone Number: " + post.Phone));

                    document.Add(linebreak);
                    document.Add(new Chunk("\n"));
                    postIndex++;
                }
                document.Close();

                byte[] byteInfo =  workStream.ToArray();
                workStream.Write(byteInfo, 0, byteInfo.Length);
                workStream.Position = 0;

                return  new FileStreamResult(workStream, "application/pdf");
            }
        }

        public async Task<List<RentPostDTO>> GetRentPostsForPDF(string id)
        {
            var AllPosts = await _context.RentPosts.Include(e => e.City).Include(e=>e.User).ToListAsync();

            var user = await _context.Users.FindAsync(id);

            var AllFavorites = await _context.UserFavorites.ToListAsync();

            var query = from post in AllPosts
                        join favorite in AllFavorites on post.Id equals favorite.RentPostId
                        where favorite.UserId == id
                        select new RentPostDTO
                        {
                            Title = post.Title,
                            Description = post.Description,
                            Location = post.Location,
                            City = post.City.Name,
                            Price=post.Price,
                            UserName=post.User.UserName,
                            Email= post.User.Email,
                            Phone= post.User.PhoneNumber
                        };

            return query.ToList();

        }

    }
}
