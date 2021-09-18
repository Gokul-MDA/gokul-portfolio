import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hello" component={Home}></Route>
        <Route exact path="/works" component={Works}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
