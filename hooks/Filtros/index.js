import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'
import useLocalizaciones from '../Localizaciones';
import useMarcadores from '../Marcadores';
import usePrecargado from '../Precargado';


const useFiltros = () => {
    const dispatch = useDispatch()
    const { filtro } = useSelector(state => state)
    const [localizaciones] = useLocalizaciones()
    const [marcadores, setMarcadores] = useMarcadores()
    const { localidades } = usePrecargado()


    const setDepartamento = (arg) => {
        dispatch({
            type:type.PUT_LOCALIDADES_FILTERED,
             payload:filtro.departamentos.includes(parseInt(arg))
             ? filtro.localidadesFiltered.filter(c => c.departamento.id !== parseInt(arg))
             : [...filtro.localidadesFiltered, ...localidades.filter(c => c.departamento.id === parseInt(arg))]
        })
        return dispatch({
            type: type.SET_DEPARTAMENTOS,
            payload: filtro.departamentos.includes(parseInt(arg))
                ? filtro.departamentos.filter(c => c !== parseInt(arg))
                : [...filtro.departamentos, parseInt(arg)]
        })
    }

    const setLocalidad = (arg) => {
        return dispatch({
            type: type.SET_LOCALIDADES,
            payload: filtro.localidades.includes(parseInt(arg))
                ? filtro.localidades.filter(c => c !== parseInt(arg))
                : [...filtro.localidades, parseInt(arg)]
        })
    }

    React.useEffect(() => {
        //Cantidad de filtros
        let filterPassed = {
            departamento: false,
            localidades: false,
        }
        const isTrue = (e => e === true)
        let marcadoresFiltered = localizaciones.filter(l => {

            //DEPARTAMENTOS FILTRO
            filterPassed["departamento"] = l.domicilio
                ? filtro.departamentos.includes(l.domicilio.departamento.id)
                    ? true
                    : false
                : false

            //LOCALIDADES FILTRO
            filterPassed["localidades"] = l.domicilio
                ? filtro.localidades.includes(l.domicilio.localidad.id)
                    ? true
                    : false
                : false


            return Object.values(filterPassed).every(isTrue);
        })
        setMarcadores(marcadoresFiltered)
    }, [filtro])

    return {
        filtros: filtro,
        setDepartamentoFilter: setDepartamento,
        setLocalidadFilter: setLocalidad
    }
}

export default useFiltros
