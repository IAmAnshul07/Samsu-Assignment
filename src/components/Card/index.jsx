import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { Divider } from "@mui/material";

const dummyData = [
  { tag: "Ethereum", readTime: "7 min read", selection: "selected for you" },
  { tag: "Blockchain", readTime: "5 min read", selection: "recommended" },
  { tag: "Development", readTime: "10 min read", selection: "popular" },
  // Add more dummy data objects as needed
];

const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/301",
  "https://picsum.photos/200/302",
  // Add more URLs as needed
];

const BlogCard = ({ title, author, date, body, id, tag, readTime }) => {
  const history = useHistory();
  const randomData = dummyData[Math.floor(Math.random() * dummyData.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleOpenPost = () => {
    history.push(`/post/${id}`);
  };

  return (
    <Box sx={{ width: "100%" }} style={{ marginBottom: "30px" }}>
      <Card
        variant="outlined"
        style={{
          height: "353px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        className="border-none important"
        onClick={handleOpenPost}
      >
        <CardContent style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {author} <span>·</span> {new Date(date).toLocaleDateString()}
            </Typography>
            <a href={`/tag/${tag}`} className="text-blue-600 hover:underline">
              {tag}
            </a>
          </div>
          <Typography
            variant="h5"
            component="div"
            style={{ marginTop: "20px" }}
          >
            {title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              component="p"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                marginRight: "20px",
              }}
              dangerouslySetInnerHTML={{ __html: body }}
            ></Typography>
            <img
              src={randomImage}
              alt="Random"
              style={{
                width: "100px",
                height: "auto",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
          </div>
        </CardContent>
        <div className="flex justify-between p-2 mt-10 mb-10">
          <div className="flex items-center w-2/5">
            <a
              href="#"
              className="bg-gray-200 mr-2 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
            >
              {randomData.tag}
            </a>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <p className="mt-1 mr-2">
                <span>{randomData.readTime}</span>
              </p>
            </Typography>
            <span>·</span>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <p className="mt-1 ml-2">
                <span>{randomData.selection}</span>
              </p>
            </Typography>
          </div>
          <div className="flex space-x-2">
            <button
              aria-label="Add to list bookmark button"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ib"
              >
                <path
                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                  fill="#000"
                ></path>
              </svg>
            </button>
            <button
              aria-label="Show less like this"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              aria-label="More options"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Divider />
      </Card>
    </Box>
  );
};

export default BlogCard;
