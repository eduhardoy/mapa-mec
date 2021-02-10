import { useDispatch, useSelector } from 'react-redux';

const useDepartamentosFiltro = () => {
    const dispatch = useDispatch()

    const setState = (arg) => {
        dispatch({ type: "SET_DEPARTAMENTOS", payload: arg })
    }

    const {departamentos} = useSelector(state => state.filtro)

    return [departamentos, setState]
}

export default useDepartamentosFiltro
