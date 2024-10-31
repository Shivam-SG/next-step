// components/BlogCard.js
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-3xl overflow-hidden border border-gray-200 cursor-pointer transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-xl h-[450px] flex flex-col">
      <div className="overflow-hidden rounded-2xl m-4 h-48">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pl-4">
      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
          {post.category}
        </span>
      </div>
      <div className="px-4 pb-4 flex flex-col flex-grow">
        
        <h3 className="mt-3 text-lg font-semibold text-gray-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center mt-4">
          <Image
            src={post.authorImage}
            alt={post.author}
            width={500}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-2 w-full text-sm text-gray-500">
            <p className="font-bold">{post.author}</p>
            <div className="flex justify-between text-xs">
              <p>{post.date}</p>
              <span>&bull;</span>
              <p>{post.readTime} mins to read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
