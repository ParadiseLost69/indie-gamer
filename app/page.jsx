import Heading from "@/components/heading";
import Link from "next/link";
import Head from "next/head";
import { getReviews } from "@/lib/reviews";



export default async function HomePage() {
  const reviews = await getReviews();
  const featured = reviews[0];

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games reviewed for you.</p>
      <h2 className=" my-3 text-xl font-bold ">Featured Review</h2>
      <div className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
        <Link
          className="flex flex-col sm:flex-row"
          href={`/reviews/${featured.slug}`}
        >
          <img
            src={featured.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="text-center py-1 font-semibold font-orbitron sm:px-2">
            {" "}
            {featured.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
