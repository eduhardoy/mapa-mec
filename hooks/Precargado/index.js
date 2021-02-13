import { useDispatch, useSelector } from "react-redux";

const usePrecargado = () => {

  const { localizaciones, departamentos, localidades } = useSelector(state => state.precarga);

  return {
    localizaciones,
    departamentos,
    localidades
  }
};

export default usePrecargado;
