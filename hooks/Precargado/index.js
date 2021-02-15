import { useDispatch, useSelector } from "react-redux";

const usePrecargado = () => {

  const { localizaciones, departamentos, localidades, estados } = useSelector(state => state.precarga);

  return {
    localizaciones,
    departamentos,
    localidades,
    estados
  }
};

export default usePrecargado;
