import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-light mb-6">404</h1>
      <h2 className="text-2xl font-light mb-8 tracking-wide">Project Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-md font-light">
        Sorry, the project you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="outline" className="rounded-none border-gray-300 dark:border-gray-700">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
