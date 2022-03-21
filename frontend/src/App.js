import "bulma/css/bulma.min.css";
import "./App.css";
import Button from "./components/Boton";
import Listado from "./components/Index";

function App() {
  return (
    <div className="App">
      <div className="container">
        
      <div className="columns container">
          <Listado className="column is-narrow"/>
          </div>
      </div>
    </div>
  );
}

export default App;
