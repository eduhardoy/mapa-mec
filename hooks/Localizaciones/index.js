import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'

const useLocalizaciones = () => {
    const { localizaciones } = useSelector(state => state.localizacion)

    return [localizaciones, null]
}

export default useLocalizaciones
