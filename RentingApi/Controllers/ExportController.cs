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

namespace RentingApi.Controllers
{
    //[ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class ExportController : ControllerBase
    {

        private readonly RentDBContext _context;

        public ExportController(RentDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<FileStreamResult> GetPDF()
        {

            await using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
            {
                MemoryStream workStream = new MemoryStream();
                Document document = new Document();
                PdfWriter.GetInstance(document, workStream).CloseStream = false;

                document.Open();
                document.Add(new Paragraph("Hello World"));
                document.Add(new Paragraph(DateTime.Now.ToString()));
                document.Close();

                byte[] byteInfo =  workStream.ToArray();
                workStream.Write(byteInfo, 0, byteInfo.Length);
                workStream.Position = 0;

                return  new FileStreamResult(workStream, "application/pdf");
            }
        }

    }
}
