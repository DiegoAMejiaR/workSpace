import './App.css';
import ListaPersonas from './components/ListaPersonas/ListaPersonas';

const listaPersonas = [
  {name: "Diego Mejía", age: 37},
  {name: "Viviana Bautista", age: 35},
  {name: "Gladis Restrepo", age: 63},
  {name: "Matías Puerta", age: 5},
  {name: "Teresita Restrepo", age: 67},
  {name: "Santiago Puerta", age: 3},
];

function App() {
  return (
    <div className="App">
      <ListaPersonas lista={listaPersonas}/>
    </div>
  );
}

export default App;
