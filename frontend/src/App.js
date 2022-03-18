import "bulma/css/bulma.min.css";
import "./App.css";
import Button from "./components/Boton";
import Listado from "./components/Index";

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <Button>Sanity check</Button>
        </div>
        <div className="column">
          <Listado />
        </div>
      </div>
    </div>
  );
}

export default App;
