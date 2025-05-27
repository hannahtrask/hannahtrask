import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"

export default function Home() {
    return (
        <>
            {/* Hero Section with Mountain Background */}
            <div className="relative h-screen w-full flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/desert-roadtrip.jpg" alt="A westfalia driving through a beautiful desert landscape." fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-white drop-shadow-md">
                            Crafting <span className="font-normal italic">seamless</span> web experiences
                        </h1>
                        <p className="text-xl text-gray-100 leading-relaxed mb-8 drop-shadow-md">
                            Transforming ideas into exceptional web experiences. Fueled by a love for wild places and big ideas.
                        </p>
                        <Link
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300"
                        >
                            Explore My Work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-[#f8f7f4]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-light mb-16 tracking-wide text-[#2d3c35]">Featured Expeditions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project) => (
                            <Link href={`/project/${project.slug}`} key={project.slug} className="group">
                                <div className="overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-white border border-gray-200">
                                    <div className="relative h-80 w-full overflow-hidden">
                                        <Image
                                            src={project.coverImage || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                                            <span className="text-xs text-white uppercase tracking-wider">{project.technologies[0]}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-light mb-2 text-[#2d3c35]">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{project.summary}</p>
                                        <div className="flex items-center text-[#5a7561] text-sm font-light">
                                            View Project{" "}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
