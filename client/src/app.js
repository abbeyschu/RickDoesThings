import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import MyPosts from "./pages/AllPosts";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Posts} />
          <Route exact path="/allposts" component={Posts}  />
          <Route exact path="/myposts" component={MyPosts}  />
          <Route exact path="/profile" component={Profile}  />
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;