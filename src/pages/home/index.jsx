import { useSelector } from "react-redux";
import BlogCard from "../../components/Card";
const Home = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <>
      {blogs.length === 0 && (
        <h1 className="text-center mt-10">No blogs found</h1>
      )}
      {!!blogs.length && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "20px",
            }}
          >
            <h4>Trending Topics</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "70%",
              margin: "auto",
            }}
          >
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
        </>
      )}

      {/* <CreatePostModal open={open} handleClose={handleClose} />{" "} */}
      {/* Add the modal */}
    </>
  );
};

export default Home;
