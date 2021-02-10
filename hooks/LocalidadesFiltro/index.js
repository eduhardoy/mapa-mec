import { useDispatch, useSelector } from 'react-redux';

const useLocalidadesFiltro = () => {
    const dispatch = useDispatch()

    const setState = (arg) => {
        dispatch({ type: "SET_DEPARTAMENTOS", payload: arg })
    }

    const {localidades} = useSelector(state => state.filtro)

    return [localidades, setState]
}

export default useLocalidadesFiltro
