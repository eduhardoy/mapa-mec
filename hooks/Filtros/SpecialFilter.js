import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../redux/types";
import usePrecargado from "../Precargado";
import cabecerasJson from "./cabeceras.json";
import useMarcadores from "../Marcadores";

const useSpecialFilter = () => {
  const dispatch = useDispatch();
  const { localizaciones } = usePrecargado();
  const { cabeceras } = useSelector((state) => state.special);
  const [marcadores, setMarcadores] = useMarcadores();

  const setCabeceras = (arg) => {
    if (arg == "all") {
      dispatch({
        type: type.SET_CABECERAS,
        payload: cabeceras.filter((e) => Boolean(e)) ? [true] : [],
      });
    }
  };

  return {
    localizaciones,
    setCabeceras,
  };
};

export default useSpecialFilter;
