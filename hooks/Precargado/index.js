import { useDispatch, useSelector } from "react-redux";

const usePrecargado = () => {

  const { localizaciones, departamentos, localidades, estados, ambitos } = useSelector(state => state.precarga);

  return {
    localizaciones,
    departamentos,
    localidades,
    estados,
    ambitos
  }
};

export default usePrecargado;
