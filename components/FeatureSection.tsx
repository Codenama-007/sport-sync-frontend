import {
  Search,
  CalendarDays,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  return (
    <section className="body-font text-gray-700">
      <div className="container mx-auto px-6 py-24">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need to Organize Your Next Game
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            SportSync makes finding teammates effortless. Connect with players,
            schedule matches, and spend less time planning and more time
            playing.
          </p>
        </div>

        {/* Features */}
        <div className="-m-4 flex flex-wrap">
          {/* Feature 1 */}
          <div className="flex p-4 md:w-1/3">
            <div className="mr-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
              <Search className="h-7 w-7 text-blue-600" />
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Find Players
              </h3>

              <p className="leading-relaxed text-gray-600">
                Browse nearby players based on your favorite sport and discover
                people ready to join your next match.
              </p>

              <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex p-4 md:w-1/3">
            <div className="mr-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
              <CalendarDays className="h-7 w-7 text-green-600" />
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Send Play Requests
              </h3>

              <p className="leading-relaxed text-gray-600">
                Invite players by selecting the sport, location, date, and time
                that works best for everyone.
              </p>

              <button className="mt-4 inline-flex items-center text-green-600 font-medium hover:text-green-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex p-4 md:w-1/3">
            <div className="mr-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
              <UserCheck className="h-7 w-7 text-purple-600" />
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Accept & Play
              </h3>

              <p className="leading-relaxed text-gray-600">
                Receive instant responses to your invitations. Once accepted,
                all that's left is to show up and enjoy the game.
              </p>

              <button className="mt-4 inline-flex items-center text-purple-600 font-medium hover:text-purple-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}