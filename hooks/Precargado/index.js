import { useDispatch, useSelector } from "react-redux";

const usePrecargado = () => {

  const { localizaciones, departamentos, localidades, estados, ambitos, internetProveedores } = useSelector(state => state.precarga);

  return {
    localizaciones,
    departamentos,
    localidades,
    estados,
    ambitos,
    internetProveedores
  }
};

export default usePrecargado;
