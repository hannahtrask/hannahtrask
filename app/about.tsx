export const About = () => {
    return (
        <div className="pt-24">
            <div className="relative h-[50vh] w-full flex items-center">
                <div className="absolute inset-0 z-0">
                    {/*<Image src="/desert-roadtrip.jpg" alt="A westfalia driving through a beautiful desert landscape." fill priority className="object-cover" />*/}
                    <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-light text-white drop-shadow-md">About Me</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <p className="text-lg text-gray-800 leading-relaxed mb-8 drop-shadow-md">
                    Hello! I&apos;m Hannah, a creative web developer with a passion for crafting beautiful, functional, and accessible digital experiences. I&apos;ve always been drawn to the intersection of art and technology, and I&apos;ve found my niche in web development.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed mb-8 drop-shadow-md">
                    I&apos;ve had the privilege of working with a diverse range of clients, from small businesses to large corporations, and I&apos;ve learned that every project is unique. I approach each project with a fresh perspective, a willingness to learn, and a commitment to delivering the best possible outcome for my clients.
                </p>
            </div>
        </div>
    )
}