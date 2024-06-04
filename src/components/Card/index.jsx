import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
          height: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {author}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {new Date(date).toLocaleDateString()}
            </Typography>
          </div>
          <Typography
            variant="h5"
            component="div"
            style={{ marginTop: "20px" }}
          >
            {title}
            <Divider style={{ margin: "25px 0px 25px 0px" }} />
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
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpenPost}>
            Open Blog
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BlogCard;
