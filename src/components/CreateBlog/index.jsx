import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const CreateNewBlog = ({ open, handleClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");

  return (
    <Dialog open={open} onClose={handleClose}>
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
        <TextField
          margin="dense"
          label="Body"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        <Button variant="contained">Draft</Button>
        <Button variant="contained">Publish</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNewBlog;
