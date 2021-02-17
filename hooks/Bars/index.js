import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'

const useBars = () => {
    const dispatch = useDispatch()
    const { bar } = useSelector(state => state)

    const setSecondBar = (arg) => {
        dispatch({
            type: type.SELECT_BAR_ITEM,
            payload: arg
        })
    }

    return {
        firstBar: bar.firstBar,
        secondBar: bar.secondBar,
        setSecondBar: setSecondBar
    }
}

export default useBars
