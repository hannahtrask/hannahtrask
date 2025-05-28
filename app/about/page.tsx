import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mountain, Code, Heart, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | Hannah Catherine Trask",
  description: "Learn more about Hannah, a creative web developer with a passion for the outdoors and crafting beautiful digital experiences.",
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/desert-roadtrip.jpg" 
            alt="A westfalia driving through a beautiful desert landscape." 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light text-white drop-shadow-md mb-6 tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md font-light">
              Where creativity meets code, and adventure fuels innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#f8f7f4] topo-pattern">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction Section */}
            <div className="bg-white p-8 md:p-12 shadow-sm mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-xl leading-relaxed mb-8 font-light text-gray-800">
                    Hey! I&apos;m Hannah, and I&apos;m a creative web developer with a passion for crafting and honing beautiful
                    and functional digital experiences. I&apos;ve always been drawn to the
                    way web development is like a puzzle.
                  </p>

                  <p className="text-lg leading-relaxed font-light text-gray-700 max-w-3xl">
                    In my web development and design work, I specialize in working with{" "}
                    <span className="font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded">outdoor industry</span>,{" "}
                    <span className="font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded">e-commerce</span>,{" "}
                    <span className="font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded">adventure travel companies</span>,{" "}
                    and{" "}
                    <span className="font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded">travel bloggers</span>.
                  </p>
                </div>

                <div className="relative h-80 w-full overflow-hidden rounded-sm group">
                  <Image
                    src="/me-climbing.jpg"
                    alt="Hannah rock climbing"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-12">
                <div className="relative h-80 w-full overflow-hidden rounded-sm group lg:order-1">
                  <Image
                    src="/me-rafting.jpg"
                    alt="Hannah white water rafting"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                  </div>
                </div>

                <div className="lg:col-span-2 lg:order-2">
                  <p className="text-lg leading-relaxed font-light text-gray-700">
                    When I&apos;m not at work, you&apos;ll find me exploring my now home in Jackson Wyoming. You can probably find me on the whitewater on the Snake River, riding single-track downhill trails on my mountain bike on Teton Pass, or climbing in the gym or on any of the local rock climbing crags.
                    These daily adventures aren&apos;t just hobbies to me; they're
                    fundamental to my experience of life. They fuel my creativity and teach me that the best solutions often
                    come from stepping away from the screen and finding inspiration in the world around me.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills & Approach Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-desert-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-desert-600" />
                </div>
                <h3 className="text-xl font-light mb-4 text-desert-800">Technical Experience</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  I have four+ years of full time professional experience in web development. I have a strong understanding of how the web works and the best, most efficient and effective way to implement them.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-desert-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-desert-600" />
                </div>
                <h3 className="text-xl font-light mb-4 text-desert-800">You-Centered Work</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Every project starts with understanding what your goals are. I communicate often
                  to ensure that the final product not only looks great but also meets your specific needs.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-desert-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mountain className="h-8 w-8 text-desert-600" />
                </div>
                <h3 className="text-xl font-light mb-4 text-desert-800">Adventure Inspired</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  My love for adventure means I understand when it&apos;s time to focus and get into a flow state. Working together we&apos;ll make a plan and I&apos;ll get the job done for you and on time, no matter what.
                </p>
              </div>
            </div>

            {/* Personal Philosophy Section */}
            <div className="bg-desert-50 p-8 md:p-12 border border-desert-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 w-full overflow-hidden rounded-sm group">
                  <Image
                    src="/me-selfie.jpg"
                    alt="Hannah's van life adventures"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-light mb-8 tracking-wide text-desert-800">
                    Beyond the Code
                  </h2>

                  <p className="text-gray-700 font-light leading-relaxed mb-6">
                    My passion for the outdoors isn't just a hobby. I discovered the magic of being challenged outside at a young age,
                    and it has directly influenced how I move around in the world. The patience required for a long climb, the
                    quick and resolute decision-making needed when navigating rapids, and the creativity sparked
                    by an awesome sunset or sunrise all translates into better work and more thoughtful design decisions.
                  </p>

                  <p className="text-gray-700 font-light leading-relaxed mb-8">
                    I believe that the best digital experiences are like the best outdoor
                    adventures: they're well-planned, beautifully executed, and leave you
                    feeling inspired and accomplished.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-desert-600 hover:bg-desert-700 text-white">
                        Let's Work Together
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
