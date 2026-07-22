export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(featured desc, order asc, publishedAt desc) {
    _id,
    title,
    slug,
    clientName,
    subtitle,
    overview,
    problemStatement,
    solutions,
    projectType,
    shortDescription,
    scopeOfWork,
    outcomes,
    featured,
    "cardImage": coalesce(screenshots[0], images[0]),
    publishedAt
  }
`

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    subtitle,
    logo,
    heroImage,
    overview,
    problemStatement,
    solutions,
    designProcess,
    technologies,
    liveUrl,
    projectType,
    shortDescription,
    body,
    scopeOfWork,
    outcomes,
    images,
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
