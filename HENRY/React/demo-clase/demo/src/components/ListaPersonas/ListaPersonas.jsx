import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem";

// Esto es un componente funcional
const ListaPersonas = (props) => { // const ListaPersonas = ( {list} ) => Destructuración
  return (
    <div>
      {/* props.lista => array
          props siempre es un objeto
          Por cada elemento del array, mostrar una PersonaItem
      */}
      {props.lista.map(persona => {
        return <PersonaItem name={persona.name} age={persona.age} />;
      })}

    </div>
  );
}

export default ListaPersonas;

/* 
import React from "react";
// Esto es un componente de clase
class ListaPersonasClase extends React.Component {
  render() {
    return (
      < div >

        <div>
          <hr></hr>
          <p>Nombre: Diego Mejía</p>
          <p>Edad: 37</p>
          <hr></hr>
        </div>

        <div>
          <hr></hr>
          <p>Nombre: Gladis Restrepo</p>
          <p>Edad: 63</p>
          <hr></hr>
        </div>

        <div>
          <hr></hr>
          <p>Nombre: Matías Puerta</p>
          <p>Edad: 5</p>
          <hr></hr>
        </div>

      </div >
    )
  }
}

export default ListaPersonasClase;
*/