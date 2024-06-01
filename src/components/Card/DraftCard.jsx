import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreateNewBlog from "../CreateBlogModal";
import { useState } from "react";

const DraftCard = ({ title, author, date, body, id }) => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = (isOpen) => {
        setOpenModal(isOpen);
    };

    return (
        <Box sx={{ width: "275px" }} style={{ margin: "2px" }}>
            <Card
                variant="outlined"
                style={{
                    height: "350px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
                className="pointer"
                onClick={() => toggleModal(true)}
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
                    <Typography variant="h5" component="div">
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
