import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../redux/types";
import usePrecargado from "../Precargado";
import cabecerasJson from "./cabeceras.json";
import useMarcadores from "../Marcadores";

const useSpecialFilter = () => {
  const dispatch = useDispatch();
  const { localizaciones } = usePrecargado();
  const { special } = useSelector((state) => state);
  const { marcadores, setMarcadores } = useMarcadores();

  const setCabeceras = (arg) => {
    if (arg == "all") {
      dispatch({
        type: type.SET_CABECERAS,
        payload: special.cabeceras.includes(true) ? [] : [true],
      });
    }
  };

  React.useEffect(() => {
    //Cantidad de filtros
    let filterPassed = {
      cabeceras: false,
    };
    const isTrue = (e) => e === true;
    let marcadoresFiltered = localizaciones.filter((l) => {
      //DEPARTAMENTOS CABECERAS
      filterPassed["cabeceras"] = special.cabeceras[0]
        ? cabecerasJson.filter((e) => e["CUA-ANEXO"] == l.cueanexo).length > 0
          ? true
          : false
        : false;

      return Object.values(filterPassed).every(isTrue);
    });

    setMarcadores(marcadoresFiltered);
  }, [special]);

  return {
    localizaciones,
    setCabeceras,
  };
};

export default useSpecialFilter;
