import { useDispatch, useSelector } from "react-redux";

const usePrecargado = () => {
  const dispatch = useDispatch();

  const { departamento, localidad } = useSelector(state => state);

  return {
    departamentos: departamento.departamentos,
    localidades: localidad.localidades
  }
};

export default usePrecargado;
