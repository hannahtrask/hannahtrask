import { defineField, defineType } from 'sanity'

export const caseStudySchema = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Pin this to the top of the Work page.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (after featured).',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Custom Build',
          'Squarespace',
          'WordPress',
          'Shopify',
          'Wix',
          'Nonprofit',
          'E-commerce',
          'Booking System',
          'CMS Integration',
          'Redesign',
          'Copywriting',
        ],
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Shown on the /work grid listing (1–2 sentences).',
    }),
    defineField({
      name: 'body',
      title: 'Full Write-up',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'scopeOfWork',
      title: 'Scope of Work',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What was done on this project (bullet list).',
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes / Results',
      type: 'text',
      rows: 4,
      description: 'Measurable results or notable outcomes.',
    }),
    defineField({
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Project URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'screenshots.0',
    },
  },
})
