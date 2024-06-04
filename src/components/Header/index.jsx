import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import addButton from "../../assets/add.png";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Blog</Link>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/add-blog">
            <img src={addButton} style={{ width: "25px" }} />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
