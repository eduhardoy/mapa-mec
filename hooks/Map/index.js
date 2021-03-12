import React from "react"
import { useDispatch, useSelector } from "react-redux"
import * as type from "../../redux/types"

const useMap = () => {
    const dispatch = useDispatch()
    const { infowindow } = useSelector(state => state.map)

    const setInfoWindow = (show, data) => {
        dispatch({
            type: type.SHOW_INFO_WINDOW,
            payload: { show, data }
        })
    }


    return {
        infowindow,
        setInfoWindow
    }
}

export default useMap