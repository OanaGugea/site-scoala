import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Buildings} from "./pages/buildings/Buildings";

function App() {
  return (
    <Router>
      <Header />
      <Switch >
          <Route path={'/'} component={Home} exact/>
          <Route path={'/structuri'} component={Buildings} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
