import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blog.blogs.find((blog) => blog.id.toString() === id)
  );

  if (!blog) {
    return (
      <div className="flex justify-center items-center mt-10">
        <h2>Blog Post Not Found</h2>
      </div>
    );
  }

  return (
    <Box sx={{ width: "70%", margin: "0 auto", padding: "20px" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {blog.title}
            <Divider style={{ margin: "25px 0px 25px 0px" }} />
          </Typography>
          <Typography
            sx={{ fontSize: 14, marginBottom: "25px" }}
            color="text.secondary"
            gutterBottom
          >
            {blog.author} - {new Date(blog.date).toLocaleDateString()}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          ></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogDetails;
