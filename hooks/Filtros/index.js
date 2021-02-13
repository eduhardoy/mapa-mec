import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'
import useMarcadores from '../Marcadores';
import usePrecargado from '../Precargado';


const useFiltros = () => {
    const dispatch = useDispatch()
    const { localizaciones, localidades } = usePrecargado()
    const { filtro } = useSelector(state => state)
    const [marcadores, setMarcadores] = useMarcadores()


    const setDepartamento = (arg) => {
        if (filtro.departamentos.includes(parseInt(arg))) { //CUANDO DESELECCIONA DEPARTAMENTO
            dispatch({
                type: type.PUT_LOCALIDADES_FILTERED,
                payload: filtro.localidadesFiltered.filter(c => c.departamento.id !== parseInt(arg))
            })
            let locIds = [...filtro.localidades]
            for (const loc of localidades.filter(c => c.departamento.id === parseInt(arg))) {
                locIds = locIds.filter(e => e !== loc.id)
            }
            dispatch({
                type: type.SET_LOCALIDADES,
                payload: [...locIds]
            })
        } else { //CUANDO SELECCIONA DEPARTAMENTO
            dispatch({
                type: type.PUT_LOCALIDADES_FILTERED,
                payload: [...filtro.localidadesFiltered, ...localidades.filter(c => c.departamento.id === parseInt(arg))]
            })
            let locIds = []
            for (const loc of localidades.filter(c => c.departamento.id === parseInt(arg))) {
                locIds.push(loc.id)
            }
            dispatch({
                type: type.SET_LOCALIDADES,
                payload: [...filtro.localidades, ...locIds]
            })
        }
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

    const setDependencia = (arg) => {
        return dispatch({
            type: type.SET_DEPENDENCIA,
            payload: filtro.dependencias.includes(arg)
                ? filtro.dependencias.filter(c => c !== arg)
                : [...filtro.dependencias, arg]
        })
    }

    const setEstado = (arg) => {
        return dispatch({
            type: type.SET_ESTADO,
            payload: filtro.estados.includes(parseInt(arg))
                ? filtro.estados.filter(c => c !== parseInt(arg))
                : [...filtro.estados, parseInt(arg)]
        })
    }

    React.useEffect(() => {
        //Cantidad de filtros
        let filterPassed = {
            departamento: false,
            localidades: false,
            dependencias: false,
            estados: false
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

            //DEPENDENCIA FILTRO ["Provincial", "Municipal", "Nacional"]
            filterPassed["dependencias"] = l.establecimiento
                ? filtro.dependencias.includes(l.establecimiento.dependencia)
                    ? true
                    : false
                : false

            //ESTADO FILTRO
            filterPassed["estados"] = l.estado
                ? filtro.estados.includes(l.estado.id)
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
        setLocalidadFilter: setLocalidad,
        setDependenciaFilter: setDependencia,
        setEstadoFilter: setEstado
    }
}

export default useFiltros
