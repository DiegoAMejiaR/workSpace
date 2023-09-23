/* 
* * * REACT * * *
Es una librería de js declarativa, eficiente y flexible.
Se utiliza para construir interfaces de usuarios.
Fue creada por el equipo de fb, liverada y ahora es un proyecto
open source. Es utilizada por las más grandes aplicaciones y
páginas web en el mundo.

DECLARATIVA: Describe qué se quiere hacer sin especificar cómo hacerlo.
Se enfoca en la lógica de la solución y deja la implementación al 
compilador o intérprete.
Ejemplo
*/

const numbers = [2, 5, 1, 7, 3, 9, 8];
const total = numbers.reduce((a, b) => {
    return x + y;
})
console.log(total);

/* 
Crear app de React:
>> create-react-app demo (demo es el  nombre que le damos a nuestra app,
    puede ser cualquier nombre.)

* * *PRINCIPIO DE RESPONSABILIDAD ÚNICA * * *
Establece que cada componente debe tener una única responsabilidad
o función, lo que hace que sea más fácil de mnatener y reutilizar.

* * * JSX * * *
Es una extensión de sintaxis de js utilizada en React para describir
la interfaz de usuario mediante la combinación de elementos
HTML y js en una sola sintaxis.

* * * QUE ES UN COMPONENETE * * *
Es una unidad modular de la inferfaz de usuario. Permite dividir una
aplicaciión en partes independientes y reutilizables para una mayor
eficiencia en el desarrollo y mantenimiento del código.

* * * QUES ES EL COMPONENT DIRVEN DEVELOPMENT * * *
El CDD es una metodología de desarrollo de software que se enfoca en la
creación de componentes reutilizables como la unidad fundamental del
desarrollo.

* * * PROPS * * * 
Las propiedades (props) son información y funcionalidades
quele pueden heredar un componente a un componente hijo
{nombre, descripción, prioridad, fecha}

* * * REACT CSS * * *

Inline Styling
Pdemos escribir CSS en js
*/

const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + imgUrl + ')'
};

function HelloWorldComponent() {
    return <div style={divStyle}>Hello World"</div>;
}

/* 
* * * CSS MODULE * * *
La idea detrás de esto es tener lo mejor de los estilos anteriores:
escribir en css propiamente dicho y mantener scopes locales.

----------- modulo 1 -----------------------------

import style from './landingPage.module.css';

function langingPage() {
    return(
        <div className='{style.contenedor}'>
            <h3 className='{style.titulo}'>Welcome!</h3>
            <p>This is my web page...</p>
        </div>
    );
}
-------------- modulo 2 --------------------------

LandingPage.module.css
.contenedor h3 {
    background-color: SpringGreen;
}

.titulo {
    font-size: 30px;
} 
*/

/* 
* * * STYLED-COMPONENTS * * *
La idea básica de styled-components es hacer cumplir las mejores
prácticas eliminando la asociación entre estilos y componentes
*/

//  -------------- modulo styledComponents.js -------------------------
import styled from "styled-components"

export const Titulo = styled.h3`
    color: red;
    font-size: 5em;
`
export const Contenedor = styled.div`
    color: blue;
`

// --------- modulo  ---------------------------
import {Contenedor, Titulo} from "./styledComponents";

function langingPage() {
    return(
        <Contenedor>
            <Titulo>Welcome!</Titulo>
            <p>This is my web page...</p>
        </Contenedor>
    );
}

