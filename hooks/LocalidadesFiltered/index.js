import { useDispatch, useSelector } from 'react-redux';

const useLocalidades = () => {
    const { localidadesFiltered } = useSelector(state => state.localidad)

    return [localidadesFiltered, null]
}

export default useLocalidades
