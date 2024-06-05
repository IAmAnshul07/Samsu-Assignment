import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import TextEditor from "../TextEditor";
import { EditorState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { useDispatch } from "react-redux";
import { BlogActionType } from "../../redux/actionTypes/blogActionTypes";

// eslint-disable-next-line react/prop-types
const CreateNewBlog = ({ isOpen, toggleModal, data = null }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(data?.title ? data?.title : "");
  const [author, setAuthor] = useState(data?.author ? data?.author : "");
  const [date, setDate] = useState(data?.date ? data?.date : "");
  const editor = data?.body
    ? EditorState.createWithContent(convertFromHTML(data?.body))
    : () => EditorState.createEmpty();
  const [editorState, setEditorState] = useState(editor);

  const resetModal = () => {
    setAuthor("");
    setTitle("");
    setDate("");
    setEditorState(() => EditorState.createEmpty());
  };

  const handleCloseModal = () => {
    resetModal();
    toggleModal(false);
  };

  const getBlogData = () => {
    const body = convertToHTML(editorState.getCurrentContent());
    const payload = {
      title,
      author,
      date,
      body,
    };
    if (!data) {
      payload.id = Date.now();
    } else {
      payload.id = data?.id;
    }

    return payload;
  };

  const onDraft = () => {
    const payload = getBlogData();

    dispatch({
      type: BlogActionType.SAVE_DRAFT_BLOG,
      payload: payload,
    });
    handleCloseModal();
  };

  const onPublish = () => {
    const payload = getBlogData();

    dispatch({
      type: BlogActionType.PUBLISH_BLOG,
      payload: payload,
    });
    handleCloseModal();
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleCloseModal}>
        <DialogTitle>Create a new blog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Author"
            fullWidth
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextEditor
            setEditorState={setEditorState}
            editorState={editorState}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button variant="contained" onClick={onDraft}>
            Draft
          </Button>
          <Button variant="contained" onClick={onPublish}>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateNewBlog;
