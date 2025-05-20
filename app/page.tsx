import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-24 max-w-3xl">
        <h1 className="text-5xl font-light mb-6 tracking-tight">
          Crafting <span className="font-normal italic">beautiful</span> digital experiences
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Transforming ideas into exceptional web solutions. Each project is thoughtfully designed and developed with
          attention to detail and elegance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-light mb-12 tracking-wide">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Link href={`/project/${project.slug}`} key={project.slug} className="group">
              <div className="overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-80 w-full overflow-hidden mb-6">
                  <Image
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">{project.summary}</p>
                <div className="flex items-center text-gray-800 dark:text-gray-300 text-sm font-light">
                  View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
