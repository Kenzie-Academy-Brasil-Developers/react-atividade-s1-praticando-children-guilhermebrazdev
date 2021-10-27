// import { Children } from "react";
import "./App.css";
import Children from "./components/CenteredCard";
import dragao from "./assets/dragãoBranco_olhosAzuis.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Children>
          <div id="title">
            <h1>Dragão Branco de Olhos Azuis</h1>
          </div>

          <img src={dragao} alt="Dragão" id="dragao"></img>

          <div id="descricao">
            <p>
              Este dragão lendário é uma poderosa máquina de destruição.
              Praticamente invencível, muito poucos enfretaram esta magnífica
              criatura e viveram para contar história
            </p>
          </div>
          <div id="atkEdef">
            <p>ATK/3000 DEF/2500</p>
          </div>
        </Children>
      </header>
    </div>
  );
}

export default App;
