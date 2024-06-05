import { useSelector } from "react-redux";
import BlogCard from "../../components/Card";
import Carousel from "../../components/carousel";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5">
        <Carousel />
      </div>

      {blogs.length === 0 && (
        <h1 className="text-center mt-10">No blogs found</h1>
      )}
      {!!blogs.length && (
        <div className="flex flex-col items-center w-4/5">
          {blogs.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              date={post.date}
              body={post.body}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
