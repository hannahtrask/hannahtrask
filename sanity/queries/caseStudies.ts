// GROQ queries for case studies

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  subtitle,
  "slug": slug.current,
  logo,
  heroImage,
  overview,
  problemStatement,
  solutions,
  designProcess,
  technologies,
  liveUrl,
  images
}`

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  subtitle,
  "slug": slug.current,
  logo,
  heroImage,
  overview,
  problemStatement,
  solutions,
  designProcess,
  technologies,
  liveUrl,
  images
}`

export const allCaseStudySlugsQuery = `*[_type == "caseStudy"] {
  "slug": slug.current
}`
