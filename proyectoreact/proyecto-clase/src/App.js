import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./componentes/home/home";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacto from "./componentes/contacto/contacto";
import Personajes from "./componentes/personajes/personajes";
import Ejemplo from "./componentes/ejemplo/ejemplo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/personajes">     
          <Personajes />
          </Route>
        <Route exact path="/contacto">     
          <Contacto />
          </Route>
          <Route exact path="/ejemplo">     
          <Ejemplo />
          </Route>

      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
