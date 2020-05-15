import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Route } from "react-router-dom";
import JokesFetched from "./Components/Homepage";
import NewJokes from "./Components/NewJokes";
import Userjokelist from "./Components/UserJokes";
import Navigation from "./Components/Navigation";
function App() {
  return (
    <Grid
      container
      direction="column"
      style={{ backgroundColor: "rgba(150,250,250,0.9)", marginBottom: "0%" }}
    >
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item container style={{ marginTop: "5%", marginBottom: "20%" }}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Route exact path="/" component={JokesFetched} />
          <Route exact path="/new" component={NewJokes} />
          <Route exact path="/jokelist" component={Userjokelist} />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
