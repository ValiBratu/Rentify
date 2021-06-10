using EFCoreRelations.Data;
using EFCoreRelations.Data.DTOs;
using EFCoreRelations.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

using SendGrid;
using SendGrid.Helpers.Mail;


namespace RentingApi.Controllers
{
    //[ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase
    {

        private readonly RentDBContext _context;

        public EmailsController(RentDBContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<SendGrid.Response> SendEmailTest()
        {

            var apiKey = Environment.GetEnvironmentVariable("SendGridKey");
            var client = new SendGridClient(apiKey);

            var from = new EmailAddress("vali.bratu7@gmail.com","Rentify");
            var to = new EmailAddress("vali.bratu7@gmail.com", "Client");

            var subject = "New Renting Opportunities!";
            var textContent = "Fresh posts were added.";

            var htmlContent = "<strong>New renting posts were added. We think you might be intersted in </strong>" +
                "<br></br>" +
                "<p>Check out the new posts: </p><a href=\"https://localhost:44316/posts\">here</a>";

            var msg = MailHelper.CreateSingleEmail(
                from,
                to,
                subject,
                textContent,
                htmlContent
                );

            var response = await client.SendEmailAsync(msg);

            return response;

        }


    }
}
