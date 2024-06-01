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
      <div style={{ display: "flex", flex: "wrap" }}>
        <CreateNewBlog isOpen={openModal} toggleModal={toggleModal} />
        {draftBlogs.length === 0 && (
          <h1 className="text-center mt-10">No draft blogs</h1>
        )}
        {!!draftBlogs.length &&
          draftBlogs.map((blog) => (
            <DraftCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              body={blog.body}
            />
          ))}
      </div>
    </>
  );
};

export default DraftBlog;
