import { useState } from "react";

function ListCars() {
  return useState([
    { id: 1, nom: "Peugeot" },
    { id: 2, nom: "Tesla" },
    { id: 3, nom: "Dacia" },
  ]);
}
export default ListCars;
