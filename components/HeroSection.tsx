import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex flex-col-reverse items-center px-6 py-24 md:flex-row">
                {/* Left Content */}
                <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left">
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                        Never Miss a Game Again.
                        <br className="hidden lg:inline-block" />
                        Find Players. Send Requests. Play Together.
                    </h1>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                        SportSync helps sports enthusiasts connect with nearby players.
                        Send a play request, choose the sport, location, and time, and let
                        others accept or decline your invitation. Whether it's football,
                        cricket, badminton, basketball, or volleyball, finding teammates
                        has never been easier.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        <Link
                            href="/"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mb-12 w-full md:mb-0 md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
                        alt="People playing football on a field"
                        width={720}
                        height={600}
                        className="mx-auto rounded-2xl object-cover shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}