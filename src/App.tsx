import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Buildings } from "./pages/buildings/Buildings";
import { makeStyles, Paper } from "@material-ui/core";
import { MissionAndVision } from "./pages/mision/MissionAndVision";
import { UtilsPage } from "./pages/utils/UtilsPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { NewsPage } from "./pages/news/NewsPage";
import { PhotoGallery } from "./pages/gallery/PhotoGallery";
import { LabsPage } from "./pages/labs/LabsPage";

const useStyle = makeStyles(() => ({
  appContent: {
    position: "relative",
    minHeight: "94vh",
    margin: "2% 5%",
    overflowY: "auto",
  },
}));
function App() {
  const classes = useStyle();
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Paper elevation={3} className={classes.appContent}>
        <Header />
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/structuri"} component={Buildings} />
          <Route path={"/misiunea"} component={MissionAndVision} />
          <Route path={"/utile"} component={UtilsPage} />
          <Route path={"/contact"} component={ContactPage} />
          <Route path={"/anunturi"} component={NewsPage} />
          <Route path={"/galerie"} component={PhotoGallery} />
          <Route path={"/laboratoare"} component={LabsPage} />
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
