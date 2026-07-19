export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(featured desc, order asc, publishedAt desc) {
    _id,
    title,
    slug,
    clientName,
    projectType,
    shortDescription,
    featured,
    "coverImage": screenshots[0],
    publishedAt
  }
`

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    projectType,
    shortDescription,
    body,
    scopeOfWork,
    outcomes,
    screenshots,
    projectUrl,
    featured,
    publishedAt
  }
`

export const allCaseSlugsQuery = `
  *[_type == "caseStudy"] { "slug": slug.current }
`

export const allTestimonialsQuery = `
  *[_type == "testimonial"] | order(featured desc, sortOrder asc, _createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    featured,
    sortOrder,
    headshot
  }
`
