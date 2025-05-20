import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white mb-12 text-sm tracking-wide"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">{project.title}</h1>

        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden mb-16">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-16">
          <p className="text-xl leading-relaxed mb-8 font-light">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-xs tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild variant="outline" className="rounded-none border-gray-300 dark:border-gray-700">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button variant="outline" asChild className="rounded-none border-gray-300 dark:border-gray-700">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View Code
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-light mb-12 tracking-wide">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative w-full h-[350px] overflow-hidden">
                <Image src={project.beforeImage || "/placeholder.svg"} alt="Before" fill className="object-cover" />
              </div>
              <p className="font-light text-sm tracking-wide text-center">Before</p>
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-[350px] overflow-hidden">
                <Image src={project.afterImage || "/placeholder.svg"} alt="After" fill className="object-cover" />
              </div>
              <p className="font-light text-sm tracking-wide text-center">After</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-12 tracking-wide">Project Highlights</h2>
          <ul className="space-y-6">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 border border-gray-300 dark:border-gray-700 flex items-center justify-center mr-4 mt-0.5 text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-800 dark:text-gray-200 font-light">{highlight}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
