import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Buildings } from "./pages/buildings/Buildings";
import { makeStyles, Paper } from "@material-ui/core";
import { MissionAndVision } from "./pages/mision/MissionAndVision";

const useStyle = makeStyles(() => ({
  appContent: {
    position: "relative",
    minHeight: "94vh",
    margin: "2% 5%",
  },
}));
function App() {
  const classes = useStyle();
  return (
    <Router>
      <Paper elevation={3} className={classes.appContent}>
        <Header />
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/structuri"} component={Buildings} />
          <Route path={"/misiunea"} component={MissionAndVision} />
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
