import Link from "next/link";

export default function CTA() {
  return (
    <section className="body-font bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Teammate?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-blue-100">
            Whether you're looking for a football squad, a badminton partner,
            or a weekend cricket team, SportSync helps you connect with nearby
            players, schedule matches, and spend more time playing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Create an Account
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}