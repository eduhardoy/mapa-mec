import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'

const useMarcadores = () => {
    const dispatch = useDispatch()
    const { marcadores } = useSelector(state => state.marcador)
    const setMarcadores = (arg) => dispatch({ type: type.SET_MARCADORES, payload: arg })

    return { marcadores, setMarcadores }
}

export default useMarcadores
