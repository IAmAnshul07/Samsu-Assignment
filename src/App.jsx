import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import DraftBlog from "./pages/addBlog/index";
import Header from "./components/Header";
import "./App.css";
import "draft-js/dist/Draft.css";
import BlogDetails from "./pages/blogDetails";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-blog">
            <DraftBlog />
          </Route>
          <Route exact path="/post/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
