import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags, publishDate } = blog;

  return (
    <div className="group overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="block w-full relative">
        <div className="relative w-full">
          <Image
            src={image}
            alt="blog image"
            width={800}
            height={500}
            className="w- h-[320px] object-cover rounded-t-sm"
            />
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <div className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </div>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="text-sm text-dark dark:text-white">
          <h4 className="mb-1 font-medium">Date</h4>
          <p className="text-xs text-body-color">{publishDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
