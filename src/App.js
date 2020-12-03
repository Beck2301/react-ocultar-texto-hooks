import React from "react";
import "./style.css";
import OcultarTexto from "./OcultarTexto";

export default function App() {
  return (
    <div>
      <OcultarTexto
        text={
          "Me gustan mucho las pupusas de frijol con queso y las revueltas tambien"
        }
        maxLength={24}
      />
    </div>
  );
}
