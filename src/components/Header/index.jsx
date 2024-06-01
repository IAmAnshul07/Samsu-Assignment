import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">Blog</Link>
                </Typography>
                <Link to="/add-blog">Add Blog</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
