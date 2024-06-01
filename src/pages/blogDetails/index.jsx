import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Typography } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blog.blogs.find((blog) => blog.id.toString() === id)
  );

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <Box
      sx={{ width: "100%", maxWidth: 800, margin: "0 auto", padding: "20px" }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" component="div">
            {blog.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
