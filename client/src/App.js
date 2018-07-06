import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ParksPage from "./pages/ParksPage";
import ParkPage from "./pages/ParkPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer/Footer"


// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";


const App = () => (
  <div className="App">
    <Router>
      <div>
        <NavBar />  
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/parkspage" component={ParksPage} />
          <Route exact path="/parks/:id" component={ParkPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Router>
    <Footer/>
  </div>
);

export default App;