import React, { useState } from "react";

// Este componente espera 2 props

//   texto -El texto para mostrar en pantalla

// maxLength: cuántos caracteres mostrar antes de "leer más"

function OcultarTexto({ text = "Sin asignar un texto", maxLength }) {
  // Crea un fragmento de estado e inicialízalo en `true`

  // `hidden` mantendrá el valor actual del estado,

  // y `setHidden` nos permitirá cambiarlo

  const [hidden, setHidden] = useState(true);

  // Si el texto es lo suficientemente corto, simplemente renderizarlo

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Renderiza el texto (abreviado o completo) seguido de
  // un enlace para expandirlo / contraerlo.
  // Cuando se hace clic en un enlace, actualiza el valor de `hidden`,
  // que activará una re-renderización

  //Operador condicional (ternario)
  //cadena.substr(inicio[, longitud]) del texto x hasta la longitud asignada
  //.trim elimina espacios en blanco
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> Leer mas</a>
      ) : (
        <a onClick={() => setHidden(true)}> Leer menos</a>
      )}
    </span>
  );
}

export default OcultarTexto;
