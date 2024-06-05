import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { Divider } from "@mui/material";

const BlogCard = ({ title, author, date, body, id }) => {
  const history = useHistory();

  const handleOpenPost = () => {
    history.push(`/post/${id}`);
  };

  return (
    <Box sx={{ width: "100%" }} style={{ marginBottom: "30px" }}>
      <Card
        variant="outlined"
        style={{
          height: "270px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        className="border-none important"
        onClick={handleOpenPost}
      >
        <CardContent style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {author} <span>·</span> {new Date(date).toLocaleDateString()}
            </Typography>
          </div>
          <Typography
            variant="h5"
            component="div"
            style={{ marginTop: "20px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
            }}
            dangerouslySetInnerHTML={{ __html: body }}
          ></Typography>
        </CardContent>
        <Divider />
      </Card>
    </Box>
  );
};

export default BlogCard;
