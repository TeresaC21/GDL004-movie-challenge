import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "src/components/Header";
import HomeView from "src/views/HomeView";
import MoviesView from "src/views/MoviesView";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies/:searchTerm" component={MoviesView} />
        <Route exact path={["/movies/", "/movies"]}>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
