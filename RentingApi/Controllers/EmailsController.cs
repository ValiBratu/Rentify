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
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase
    {

        private readonly RentDBContext _context;

        public EmailsController(RentDBContext context)
        {
            _context = context;
        }

        
        
        // this will send an email to all the users in the database except de user who made the rent post
        // because my sendgrid plan allows to send only 100 emails/day it's better to use the 'SendEmailForTest' method when testing
        [HttpGet("{id}")]
        public  void SendEmailWhenPostAdded(string id)
        {

            var users = _context.Users.ToList();

            foreach(var user in users)
            {
                if (user.Id != id)
                {
                    SendEmail(user.Email, user.UserName);
                }
            }


        }


        [HttpGet]
        public void SendEmailForTest()
        {
            SendEmail("vali.bratu77@gmail.com", "ValiFBratu");
        }

      
        public async  void SendEmail(string Email,string UserName)
        {

            

            var apiKey = Environment.GetEnvironmentVariable("SendGridKey");
            var client = new SendGridClient(apiKey);
            var sendGridMessage = new SendGridMessage();
            sendGridMessage.SetFrom("vali.bratu7@gmail.com", "Rentify");
            sendGridMessage.SetTemplateId("d-5aca455713e643d08a01b013e124ea49");


            sendGridMessage.AddTo(Email, UserName);
            
             sendGridMessage.SetTemplateData(new 
            {
                first_name = UserName
                
            });

            await client.SendEmailAsync(sendGridMessage);
            
        }

    }

    }

