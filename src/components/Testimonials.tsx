import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "Working with Anish was a fantastic experience. Their expertise in both front-end and back-end development brought our project to life seamlessly.",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Anish's attention to detail and ability to solve complex problems was invaluable. Our website is faster and more responsive than ever.",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "The full-stack development skills of Anish are unparalleled. They delivered a robust, scalable solution that exceeded our expectations.",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Diana",
    username: "@diana",
    body: "I highly recommend Anish for any web development project. Their knowledge of modern frameworks and technologies ensured a top-notch final product.",
    img: "https://avatar.vercel.sh/diana",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "Anish is a true professional. Their full-stack capabilities allowed us to streamline our development process and launch our product on time.",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Fiona",
    username: "@fiona",
    body: "From concept to completion, Anish demonstrated exceptional skill in both design and functionality. Our team couldn't be happier with the results.",
    img: "https://avatar.vercel.sh/fiona",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex my-24 h-[500px] w-full flex-col items-center justify-center overflow-hidden max-w-5xl mx-auto">
      <h2 className="bg-gradient-to-b from-black bg-clip-text text-transparent text-4xl sm:text-6xl font-semibold via-zinc-900/80 mb-4 to-zinc-700/30 ">
        Testimonials
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
