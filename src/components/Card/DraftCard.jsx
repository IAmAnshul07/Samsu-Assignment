import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreateNewBlog from "../CreateBlogModal";
import { useState } from "react";
import { Divider } from "@mui/material";

const DraftCard = ({ title, author, date, body, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (isOpen) => {
    setOpenModal(isOpen);
  };

  return (
    <Box
      sx={{ width: "70%" }}
      style={{
        margin: "2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        className="pointer border-none important"
        onClick={() => toggleModal(true)}
      >
        <CardContent style={{ overflow: "hidden" }}>
          <div className="flex justify-between indicator mr-5">
            <span className="indicator-item badge badge-primary bg-orange-300">
              Draft
            </span>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              className="mr-10"
            >
              {author}
              <span> · </span>
              {new Date(date).toLocaleDateString()}
            </Typography>
          </div>
          <Typography
            variant="h5"
            component="div"
            style={{ marginTop: "20px" }}
            className="mb-10 important"
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
      {openModal && (
        <CreateNewBlog
          isOpen={openModal}
          toggleModal={toggleModal}
          data={{ title, author, date, body, id }}
        />
      )}
    </Box>
  );
};

export default DraftCard;
