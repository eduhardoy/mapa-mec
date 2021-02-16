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

    const setJurisdiccion = arg => {
        return dispatch({
            type: type.SET_JURISDICCION,
            payload: filtro.jurisdicciones.includes(arg)
                ? filtro.jurisdicciones.filter(c => c !== arg)
                : [...filtro.jurisdicciones, arg]
        })
    }

    const setOrganismoDependencia = arg => {
        return dispatch({
            type: type.SET_ORGANISMO_DEPENDENIA,
            payload: filtro.organismoDependencias.includes(arg)
                ? filtro.organismoDependencias.filter(c => c !== arg)
                : [...filtro.organismoDependencias, arg]
        })
    }

    const setNiveles = arg => {
        let value = arg.split(",")

        return dispatch({
            type: type.SET_NIVEL,
            payload: filtro.niveles.some(c => value.includes(c))
                ? [...filtro.niveles.filter(c => !value.includes(c))]
                : [...filtro.niveles, ...value]
        })
    }

    const setModalidades = arg => {
        return dispatch({
            type: type.SET_MODALIDAD,
            payload: filtro.modalidades.includes(arg)
                ? filtro.modalidades.filter(c => c !== arg)
                : [...filtro.modalidades, arg]
        })
    }

    const setGestiones = arg => {
        return dispatch({
            type: type.SET_GESTION,
            payload: filtro.gestiones.includes(arg)
                ? filtro.gestiones.filter(c => c !== arg)
                : [...filtro.gestiones, arg]
        })
    }

    const setAmbitos = arg => {
        return dispatch({
            type: type.SET_AMBITO,
            payload: filtro.ambitos.includes(parseInt(arg))
                ? filtro.ambitos.filter(c => c !== parseInt(arg))
                : [...filtro.ambitos, parseInt(arg)]
        })
    }

    const setInternet = arg => {
        return dispatch({
            type: type.SET_INTENET,
            payload: filtro.internet.includes(arg == 'true' ? true : false)
                ? filtro.internet.filter(c => c !== (arg == 'true' ? true : false))
                : [...filtro.internet, arg == 'true' ? true : false]
        })
    }

    const setInternetProveedores = arg => {
        return dispatch({
            type: type.SET_PROVEEDORES_INTERNET,
            payload: filtro.proveedoresInternet.includes(parseInt(arg))
                ? filtro.proveedoresInternet.filter(c => c !== parseInt(arg))
                : [...filtro.proveedoresInternet, parseInt(arg)]
        })
    }

    React.useEffect(() => {
        //Cantidad de filtros
        let filterPassed = {
            departamento: false,
            localidades: false,
            dependencias: false,
            estados: false,
            jurisdicciones: true,
            organismoDependencias: true,
            niveles: true,
            modalidades: true,
            gestiones: true,
            ambitos: true,
            internet: true,
            internetProveedores: true
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

            //JURISDICCION FILTRO
            if (filtro.jurisdicciones.length > 0) {
                filterPassed['jurisdicciones'] = l.colegio
                    ? filtro.jurisdicciones.includes(l.colegio.jurisdiccion)
                        ? true
                        : false
                    : false
            }

            //ORGANISMOS DEPENDENCIAS FILTRO
            if (filtro.organismoDependencias.length > 0) {
                filterPassed['organismoDependencias'] = l.colegio
                    ? filtro.organismoDependencias.includes(l.colegio.nivelJur)
                        ? true
                        : false
                    : false
            }

            //NIVELES FILTRO
            if (filtro.niveles.length > 0) {
                filterPassed['niveles'] = l.ofertas
                    ? Object.values(l.ofertas).some(o => filtro.niveles.includes(o.idOferta))
                        ? true
                        : false
                    : false
            }

            //MODALIDADES FILTRO
            if (filtro.modalidades.length > 0) {
                filterPassed['modalidades'] = l.ofertas
                    ? Object.values(l.ofertas).some(o => filtro.modalidades.includes(o.modalidad))
                        ? true
                        : false
                    : false
            }

            //GESTIONES FILTRO
            if (filtro.gestiones.length > 0) {
                filterPassed['gestiones'] = l.establecimiento
                    ? filtro.gestiones.includes(l.establecimiento.sector)
                        ? true
                        : false
                    : false
            }

            //AMBITOS FILTRO
            if (filtro.ambitos.length > 0) {
                filterPassed['ambitos'] = l.ambito
                    ? filtro.ambitos.includes(l.ambito.id)
                        ? true
                        : false
                    : false
            }

            //INTERNET FILTRO
            if (filtro.internet.length > 0) {
                filterPassed['internet'] = l.colegio
                    ? filtro.internet.includes(l.colegio.internet)
                        ? true
                        : false
                    : false
            }

            //INTERNET PROVEEDORES FILTRO
            if (filtro.proveedoresInternet.length > 0) {
                filterPassed['internetProveedores'] = l.conexiones
                    ? Object.values(l.conexiones).some(o => filtro.proveedoresInternet.includes(o.conexionProveedor.id))
                        ? true
                        : false
                    : false
            }

            return Object.values(filterPassed).every(isTrue);
        })

        setMarcadores(marcadoresFiltered)
    }, [filtro])

    return {
        filtros: filtro,
        setDepartamentoFilter: setDepartamento,
        setLocalidadFilter: setLocalidad,
        setDependenciaFilter: setDependencia,
        setEstadoFilter: setEstado,
        setJurisdiccionFilter: setJurisdiccion,
        setOrganismoDependenciaFilter: setOrganismoDependencia,
        setNivelesFilter: setNiveles,
        setModalidadesFilter: setModalidades,
        setGestionesFilter: setGestiones,
        setAmbitosFilter: setAmbitos,
        setInternetFilter: setInternet,
        setInternetProveedoresFilter: setInternetProveedores
    }
}

export default useFiltros
