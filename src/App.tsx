import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Logo } from "./components/header/Logo";
import { MenuComponent } from "./components/header/Menu";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
