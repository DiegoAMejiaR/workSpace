import React from "react";
import Card from "./Card";

export default function SearchBar(props) {
   let id;
   return (
      <div>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
  