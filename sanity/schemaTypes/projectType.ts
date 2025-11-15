import { ProjectsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Project Name is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "completed",
      title: "Completed",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featuredProject",
      title: "Featured",
      type: "boolean",
      description: "Check this to highlight this article on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "featuredProjectUntil",
      title: "Featured Until",
      type: "datetime",
      description: "when to auto remove this from featured",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "In what state and country is this project executed",
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "projectCategory",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Installation", value: "installation" },
          { title: "Maintenance & Repair", value: "maintenance" },
          { title: "Mordernization", value: "mordernization" },
          { title: "Escators & Moving Walkway", value: "escalator" },
          { title: "Spare Parts", value: "parts" },
          {
            title: "Cunsultations & Project Management",
            value: "consultation",
          },
        ],
        layout: "dropdown",
      },

      description: "How do you categorize this project",
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "scope",
      type: "number",
    }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial", value: "commercial" },
          { title: "Educational", value: "educational" },
        ],
        layout: "dropdown",
      },
      description: "What sector will this project be used for",
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
      description: "When this is expected to start",
      validation: (Rule) => Rule.required().error("This field is required"),
    }),
    defineField({
      name: "end",
      title: "End",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
      description: "The estimated end time of the project",
      validation: (Rule) => Rule.required().error("this field is required"),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              options: { fieldset: "metadata" },
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Describe the image for SEO and accessibility.",
              //   validation: (Rule) => Rule.required().error("Required"),
            },
          ],
          fieldsets: [
            {
              name: "metadata",
              title: "Image Metadata",
              options: { collapsible: true, collapsed: true },
            },
          ],
        },
      ],
      description: "Add images of the parts of the projec",
      validation: (Rule) =>
        Rule.custom((gallery) => {
          if (!gallery) return "add an image to gallery";
          if (gallery.length < 3) return "Add at least 3 images to gallery";
          return true;
        }),
    }),

    defineField({
      name: "caseStudy",
      title: "Case Study",
      type: "object",
      fields: [
        {
          name: "problem",
          title: "Problem",
          type: "text",
        },
        {
          name: "solution",
          title: "Solution",
          type: "text",
        },
        {
          name: "outcome",
          title: "Outcome",
          type: "text",
        },
      ],
      validation: (Rule) =>
        Rule.custom((caseStudy) => {
          if (!caseStudy) return true;
          const fields = ["problem", "solution", "outcome"];
          const filledFields = fields.filter(
            (field) => caseStudy && caseStudy[field]
          );
          if (
            filledFields.length === 0 ||
            filledFields.length === fields.length
          ) {
            return true;
          }
          return "Either fill out all case study fields or leave them all blank.";
        }),
    }),
  ],
});
