import { useSelector } from "react-redux";
import CreateNewBlog from "../../components/CreateBlogModal";
import { useState } from "react";
import { Button } from "@mui/material";
import DraftCard from "../../components/Card/DraftCard";

const DraftBlog = () => {
  const { draftBlogs } = useSelector((state) => state.blog);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (isOpen) => {
    setOpenModal(isOpen);
  };

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Button variant="contained" onClick={() => toggleModal(true)}>
          Create Blog
        </Button>
      </div>
      {draftBlogs.length === 0 && (
        <h1 className="text-center mt-10">No draft blogs</h1>
      )}
      <CreateNewBlog isOpen={openModal} toggleModal={toggleModal} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!!draftBlogs.length &&
          draftBlogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginBottom: "25px",
              }}
            >
              <DraftCard
                id={blog.id}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                body={blog.body}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DraftBlog;
