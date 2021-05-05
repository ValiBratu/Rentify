using EFCoreRelations.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCoreRelations.Data
{
    public static class DbInitializer
    {

        public static void Initialize(RentDBContext context)
        {

            if (context.Cities.Any())
            {
                return;
            }
            var cities = new City[]
            {
                new City{Name="Bucuresti"},
                new City{Name="Brasov"},
                new City{Name="Iasi"},
                new City{Name="Timisoara"},
                new City{Name="Cluj"},

            };
            context.Cities.AddRange(cities);
            context.SaveChanges();

            if (context.Users.Any())
            {
                return;
            }
            var users = new ApplicationUser[]
           {
                new ApplicationUser
                {
                    UserName= "Karin Hopper",
                    Email= "karinhopper@farmex.com",
                    PhoneNumber= "+40 (889) 555-3238",
                    PasswordHash= "12345"
                },

                new ApplicationUser
                {
                    UserName="Cort Caplen",
                    Email="ccaplen0@va.gov",
                    PhoneNumber="+1 815 355 6522",
                    PasswordHash="fM100s8khu7d"
                },
                new ApplicationUser
                {
                    UserName="Jacqueline Scurrell",

                    Email="jscurrell1@techcrunch.com",

                    PhoneNumber="+52 259 425 1371",
                    PasswordHash="nfIElu0sUf"
                }

           };
            context.Users.AddRange(users);
            context.SaveChanges();

            if (context.RentPosts.Any())
            {
                return;
            }
            var posts = new RentPost[]
            {
                new RentPost{
                      Title= "Terrace",
                      UserId="2",
                      Description= "Struck by field hockey stick",
                      Location= "8600 Macpherson Way",
                      CityId= 1,
                      Price= 389.35m
                    },

                new RentPost{
                    Title= "Junction",
                    UserId="2",
                    Description= "Scleritis with corneal involvement, unspecified eye",
                    Location= "5135 Knutson Lane",
                    CityId= 2,
                    Price= 651.04m
                    },

                  new RentPost{
                    Title= "Avenue",
                    UserId="2",
                    Description= "Other secondary chronic gout, wrist",
                    Location= "69 Bowman Center",
                    CityId= 3,
                    Price= 955.16m
                    },

                  new RentPost{
                    Title ="Crossing",
                    UserId="2",
                    Description= "Poisoning by other hormones and synthetic substitutes, undetermined, initial encounter",
                    Location= "398 Warner Plaza",
                    CityId= 1,
                    Price= 444.68m
                    }

                };
            context.RentPosts.AddRange(posts);
            context.SaveChanges();

        }

    }
}
