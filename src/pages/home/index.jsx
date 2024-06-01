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
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px",
                        }}
                    >
                        <h4>Top posts from recent blogs</h4>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(275px, 1fr))",
                            gap: "10px",
                            margin: "5px",
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
