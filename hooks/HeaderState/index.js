import React from "react";

function useHeaderState() {
  const [buscador, setBuscador] = React.useState("NOMBRE");
  return {
    buscador,
    setBuscador,
  };
}

export default useHeaderState;
