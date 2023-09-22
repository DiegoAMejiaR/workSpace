import React from "react";

class PersonaItem extends React.Component {
  // El constructor va a recibir los props
  constructor(props) {
    super(props) // constructor de la clase de la que hereda
  }
  render() {
    return (
      < div >
        <hr></hr>
        <p>Nombre: {this.props.name}</p>
        <p>Edad: {this.props.age}</p>
        <hr></hr>
      </div >
    )
  }
}

export default PersonaItem;


/* const PersonaItem = (props) => {
    return (
        <div>
            <hr></hr>
            <p>Nombre: {props.name}</p>
            <p>Edad: {props.age}</p>
            <hr></hr>
        </div>
    );
}

export default PersonaItem; */