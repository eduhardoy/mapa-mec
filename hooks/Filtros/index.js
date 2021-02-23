import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../redux/types'
import useMarcadores from '../Marcadores';
import usePrecargado from '../Precargado';


const useFiltros = () => {
    const dispatch = useDispatch()
    const { localizaciones, localidades, departamentos, estados, ambitos, internetProveedores } = usePrecargado()
    const { filtro } = useSelector(state => state)
    const { marcadores, setMarcadores } = useMarcadores()


    const setHeader = arg => {
        dispatch({
            type: type.SET_HEADER,
            payload: arg
        })
    }

    const setDepartamento = (arg) => {
        if (arg == "all") {
            if (filtro.departamentos.length > 0) {
                dispatch({
                    type: type.PUT_LOCALIDADES_FILTERED,
                    payload: []
                })
                dispatch({
                    type: type.SET_LOCALIDADES,
                    payload: []
                })
                dispatch({
                    type: type.SET_DEPARTAMENTOS,
                    payload: []
                })
            } else {
                let locIds = []
                for (const loc of localidades) {
                    locIds.push(loc.id)
                }
                let depIds = []
                for (const dep of departamentos) {
                    depIds.push(dep.id)
                }
                dispatch({
                    type: type.PUT_LOCALIDADES_FILTERED,
                    payload: [...localidades]
                })
                dispatch({
                    type: type.SET_LOCALIDADES,
                    payload: [...locIds]
                })
                dispatch({
                    type: type.SET_DEPARTAMENTOS,
                    payload: [...depIds]
                })
            }
        }
        else {
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
            dispatch({
                type: type.SET_DEPARTAMENTOS,
                payload: filtro.departamentos.includes(parseInt(arg))
                    ? filtro.departamentos.filter(c => c !== parseInt(arg))
                    : [...filtro.departamentos, parseInt(arg)]
            })
        }
    }

    const setLocalidad = (arg) => {
        if (arg == "all") {
            if (filtro.localidades.length > 0) {
                dispatch({
                    type: type.SET_LOCALIDADES,
                    payload: []
                })
            } else {
                let locIds = []
                for (const loc of filtro.localidadesFiltered) {
                    locIds.push(loc.id)
                }
                dispatch({
                    type: type.SET_LOCALIDADES,
                    payload: [...locIds]
                })
            }
        } else {
            dispatch({
                type: type.SET_LOCALIDADES,
                payload: filtro.localidades.includes(parseInt(arg))
                    ? filtro.localidades.filter(c => c !== parseInt(arg))
                    : [...filtro.localidades, parseInt(arg)]
            })
        }
    }

    const setDependencia = (arg) => {
        if (arg == "all") {
            if (filtro.dependencias.length > 0) {
                dispatch({
                    type: type.SET_DEPENDENCIA,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_DEPENDENCIA,
                    payload: ["Provincial", "Municipal", "Nacional"]
                })
            }
        } else {
            dispatch({
                type: type.SET_DEPENDENCIA,
                payload: filtro.dependencias.includes(arg)
                    ? filtro.dependencias.filter(c => c !== arg)
                    : [...filtro.dependencias, arg]
            })
        }
    }

    const setEstado = (arg) => {
        if (arg == "all") {
            if (filtro.estados.length > 0) {
                dispatch({
                    type: type.SET_ESTADO,
                    payload: []
                })
            } else {
                let estIds = []
                for (const est of estados) {
                    estIds.push(est.id)
                }
                dispatch({
                    type: type.SET_ESTADO,
                    payload: [...estIds]
                })
            }
        } else {
            dispatch({
                type: type.SET_ESTADO,
                payload: filtro.estados.includes(parseInt(arg))
                    ? filtro.estados.filter(c => c !== parseInt(arg))
                    : [...filtro.estados, parseInt(arg)]
            })
        }
    }

    const setJurisdiccion = arg => {
        if (arg == "all") {
            if (filtro.jurisdicciones.length > 0) {
                dispatch({
                    type: type.SET_JURISDICCION,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_JURISDICCION,
                    payload: [
                        "NO ASIGNADA",
                        "15 Direccion General de Enseñanza Privada",
                        "33 Consejo General de Educación",
                        "37 Consejo General de Educación - Suplentes",
                        "23 Direccion General de Enseñanza Secundaria",
                        "03 Ministerio de Educación"
                    ]
                })
            }
        } else {
            dispatch({
                type: type.SET_JURISDICCION,
                payload: filtro.jurisdicciones.includes(arg)
                    ? filtro.jurisdicciones.filter(c => c !== arg)
                    : [...filtro.jurisdicciones, arg]
            })
        }
    }

    const setOrganismoDependencia = arg => {
        if (arg == "all") {
            if (filtro.organismoDependencias.length > 0) {
                dispatch({
                    type: type.SET_ORGANISMO_DEPENDENIA,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_ORGANISMO_DEPENDENIA,
                    payload: [
                        "NOASIG *No asignado*",
                        "CGE    Consejo General de Educacion",
                        "DNS Direccion de Nivel Secundario",
                        "DEP   Direccion de Enseñanza Privada",
                        "DETP Direccion de Educación Tecnico Profesional",
                        "DNSU Direccion de Nivel Superior",
                        "DEF Direccion de Educación Fisica",
                        "NC Nivel Central"
                    ]
                })
            }
        } else {
            dispatch({
                type: type.SET_ORGANISMO_DEPENDENIA,
                payload: filtro.organismoDependencias.includes(arg)
                    ? filtro.organismoDependencias.filter(c => c !== arg)
                    : [...filtro.organismoDependencias, arg]
            })
        }
    }

    const setNiveles = arg => {
        if (arg == "all") {
            if (filtro.niveles.length > 0) {
                dispatch({
                    type: type.SET_NIVEL,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_NIVEL,
                    payload: [
                        "152", "155", "121", "122", "100", "101",
                        "136", "123", "126", "140", "102", "105", "153", "156", "158",
                        "143", "144", "108", "109", "110", "111", "129", "130", "147", "148", "151", "154", "157", "159", "131", "132", "149", "150", "138",
                        "117", "115"
                    ]
                })
            }
        } else {
            let value = arg.split(",")
            dispatch({
                type: type.SET_NIVEL,
                payload: filtro.niveles.some(c => value.includes(c))
                    ? [...filtro.niveles.filter(c => !value.includes(c))]
                    : [...filtro.niveles, ...value]
            })
        }
    }

    const setModalidades = arg => {
        if (arg == "all") {
            if (filtro.modalidades.length > 0) {
                dispatch({
                    type: type.SET_MODALIDAD,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_MODALIDAD,
                    payload: [
                        "Común",
                        "Especial",
                        "Adultos"
                    ]
                })
            }
        } else {
            dispatch({
                type: type.SET_MODALIDAD,
                payload: filtro.modalidades.includes(arg)
                    ? filtro.modalidades.filter(c => c !== arg)
                    : [...filtro.modalidades, arg]
            })
        }
    }

    const setGestiones = arg => {
        if (arg == "all") {
            if (filtro.gestiones.length > 0) {
                dispatch({
                    type: type.SET_GESTION,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_GESTION,
                    payload: [
                        "Estatal",
                        "Privado"
                    ]
                })
            }
        } else {
            dispatch({
                type: type.SET_GESTION,
                payload: filtro.gestiones.includes(arg)
                    ? filtro.gestiones.filter(c => c !== arg)
                    : [...filtro.gestiones, arg]
            })
        }
    }

    const setAmbitos = arg => {
        if (arg == "all") {
            if (filtro.ambitos.length > 0) {
                dispatch({
                    type: type.SET_AMBITO,
                    payload: []
                })
            } else {
                let ambIds = []
                for (const amb of ambitos) {
                    ambIds.push(amb.id)
                }
                dispatch({
                    type: type.SET_AMBITO,
                    payload: [...ambIds]
                })
            }
        } else {
            dispatch({
                type: type.SET_AMBITO,
                payload: filtro.ambitos.includes(parseInt(arg))
                    ? filtro.ambitos.filter(c => c !== parseInt(arg))
                    : [...filtro.ambitos, parseInt(arg)]
            })
        }
    }

    const setInternet = arg => {
        if (arg == "all") {
            if (filtro.internet.length > 0) {
                dispatch({
                    type: type.SET_INTENET,
                    payload: []
                })
            } else {
                dispatch({
                    type: type.SET_INTENET,
                    payload: [true, false]
                })
            }
        } else {
            dispatch({
                type: type.SET_INTENET,
                payload: filtro.internet.includes(arg == 'true' ? true : false)
                    ? filtro.internet.filter(c => c !== (arg == 'true' ? true : false))
                    : [...filtro.internet, arg == 'true' ? true : false]
            })
        }
    }

    const setInternetProveedores = arg => {
        if (arg == "all") {
            if (filtro.proveedoresInternet.length > 0) {
                dispatch({
                    type: type.SET_PROVEEDORES_INTERNET,
                    payload: []
                })
            } else {
                let provIds = []
                for (const prov of internetProveedores) {
                    provIds.push(prov.id)
                }
                dispatch({
                    type: type.SET_PROVEEDORES_INTERNET,
                    payload: [...provIds]
                })
            }
        } else {
            dispatch({
                type: type.SET_PROVEEDORES_INTERNET,
                payload: filtro.proveedoresInternet.includes(parseInt(arg))
                    ? filtro.proveedoresInternet.filter(c => c !== parseInt(arg))
                    : [...filtro.proveedoresInternet, parseInt(arg)]
            })
        }
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

            //HEADER FILTER
            if (filtro.header.length > 0) {
                return filtro.header.includes(l) ? true : false
            }

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
        setHeaderFilter: setHeader,
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