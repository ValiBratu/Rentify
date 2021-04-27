﻿using EFCoreRelations.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace EFCoreRelations.Data
{
    public class RentDBContext : IdentityDbContext<ApplicationUser>
    {

        public RentDBContext(DbContextOptions<RentDBContext> options) : base(options) { }


        public DbSet<ApplicationUser> WebsiteUsers { get; set; }

        public DbSet<RentPost> RentPosts { get; set; }

        public DbSet<RentPostPhoto> RentPostPhotos { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
