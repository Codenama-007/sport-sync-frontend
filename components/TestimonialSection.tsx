import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Football Enthusiast",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    review:
      "Finding people to play football every weekend used to be frustrating. With SportSync, I can create a game request, choose the location, and have enough players within minutes.",
  },
  {
    name: "Ayesha Khan",
    role: "Badminton Player",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    review:
      "The play request feature is my favorite. Instead of messaging multiple people individually, I simply schedule a match and wait for players to accept.",
  },
  {
    name: "Arjun Patel",
    role: "Cricket Lover",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    review:
      "SportSync helped me meet amazing teammates in my area. Organizing weekend cricket matches has never been this simple or enjoyable.",
  },
];

export default function Testimonials() {
  return (
    <section className="body-font bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Loved by Players
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Thousands of sports enthusiasts use SportSync to find teammates,
            organize matches, and spend more time playing instead of planning.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((user) => (
            <div
              key={user.name}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={90}
                  height={90}
                  className="rounded-full object-cover"
                />

                <p className="mt-6 leading-relaxed text-gray-600">
                  "{user.review}"
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-blue-600"></div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}