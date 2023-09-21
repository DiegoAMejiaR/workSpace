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
*/