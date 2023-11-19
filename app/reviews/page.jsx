import Link from "next/link";
import Heading from "../../components/heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <div>This will list all the reviews</div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => {
          return (
            <li
              key={review.slug}
              className="bg-white border w-80 rounded shadow hover:shadow-xl"
            >
              <Link href={`/reviews/${review.slug}`}>
                <img
                  src={`${review.image}`}
                  alt=""
                  width="320"
                  height="180"
                  className="mb-2 rounded-t"
                />
                <h2 className="text-center py-1 font-orbitron font-semibold">
                  {review.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
