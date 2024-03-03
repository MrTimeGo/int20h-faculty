﻿// <auto-generated />
using System;
using Faculty.API.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Faculty.API.Migrations
{
    [DbContext(typeof(FacultyContext))]
    [Migration("20240303044937_RemovedTeacherIdFromSubject")]
    partial class RemovedTeacherIdFromSubject
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Faculty.API.Entities.Field", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("TemplateId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("TemplateId");

                    b.ToTable("Fields");
                });

            modelBuilder.Entity("Faculty.API.Entities.Grade", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("StudentId")
                        .HasColumnType("uuid");

                    b.Property<int?>("Value")
                        .HasColumnType("integer");

                    b.Property<Guid>("WorkId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("StudentId");

                    b.HasIndex("WorkId");

                    b.ToTable("Grades");
                });

            modelBuilder.Entity("Faculty.API.Entities.Group", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("Faculty.API.Entities.Student", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Activities")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("GroupId")
                        .HasColumnType("uuid");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("Faculty.API.Entities.Subject", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("Faculty.API.Entities.Template", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Templates");
                });

            modelBuilder.Entity("Faculty.API.Entities.Work", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("Deadline")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("LessonId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("LessonId");

                    b.ToTable("Works");
                });

            modelBuilder.Entity("GroupSubject", b =>
                {
                    b.Property<Guid>("GroupsId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("SubjectsId")
                        .HasColumnType("uuid");

                    b.HasKey("GroupsId", "SubjectsId");

                    b.HasIndex("SubjectsId");

                    b.ToTable("GroupSubject");
                });

            modelBuilder.Entity("Faculty.API.Entities.Field", b =>
                {
                    b.HasOne("Faculty.API.Entities.Template", "Template")
                        .WithMany("Fields")
                        .HasForeignKey("TemplateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Template");
                });

            modelBuilder.Entity("Faculty.API.Entities.Grade", b =>
                {
                    b.HasOne("Faculty.API.Entities.Student", "Student")
                        .WithMany("Grades")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Faculty.API.Entities.Work", "Work")
                        .WithMany("Grades")
                        .HasForeignKey("WorkId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");

                    b.Navigation("Work");
                });

            modelBuilder.Entity("Faculty.API.Entities.Student", b =>
                {
                    b.HasOne("Faculty.API.Entities.Group", "Group")
                        .WithMany("Students")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Group");
                });

            modelBuilder.Entity("Faculty.API.Entities.Work", b =>
                {
                    b.HasOne("Faculty.API.Entities.Subject", "Subject")
                        .WithMany("Works")
                        .HasForeignKey("LessonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("GroupSubject", b =>
                {
                    b.HasOne("Faculty.API.Entities.Group", null)
                        .WithMany()
                        .HasForeignKey("GroupsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Faculty.API.Entities.Subject", null)
                        .WithMany()
                        .HasForeignKey("SubjectsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Faculty.API.Entities.Group", b =>
                {
                    b.Navigation("Students");
                });

            modelBuilder.Entity("Faculty.API.Entities.Student", b =>
                {
                    b.Navigation("Grades");
                });

            modelBuilder.Entity("Faculty.API.Entities.Subject", b =>
                {
                    b.Navigation("Works");
                });

            modelBuilder.Entity("Faculty.API.Entities.Template", b =>
                {
                    b.Navigation("Fields");
                });

            modelBuilder.Entity("Faculty.API.Entities.Work", b =>
                {
                    b.Navigation("Grades");
                });
#pragma warning restore 612, 618
        }
    }
}