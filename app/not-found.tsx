import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NotFound() {
    return (
        <div className="min-h-screen relative flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image src="/mountain-backdrop.jpg" alt="Mountain landscape" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-6xl font-light mb-6 text-white">404</h1>
                <h2 className="text-2xl font-light mb-8 tracking-wide text-white">Trail Not Found</h2>
                <p className="text-gray-200 mb-12 max-w-md mx-auto font-light">
                    Looks like you've wandered off the beaten path. This trail doesn't exist or has been moved.
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                    <Link href="/">Return to Base Camp</Link>
                </Button>
            </div>
        </div>
    )
}
