import * as type from '../types'
import cabecerasJson from "./cabeceras.json";
import lineaCJson from "./lineaC.json";
import efasJson from './efas.json';

const marcadoresFilterMiddleware = store => next => action => {
    // console.log("STATE BEFORE", store.getState());
    // console.log("ACTION DISPATCHED", action);
    next(action);

    const estado = store.getState()
    // console.log("STATE AFTER", estado);
    const localizaciones = estado.precarga.localizaciones
    const filtro = estado.filtro

    if (
        action.type == type.SET_HEADER ||
        action.type == type.SET_DEPARTAMENTOS ||
        action.type == type.SET_LOCALIDADES ||
        action.type == type.SET_DEPENDENCIA ||
        action.type == type.SET_ESTADO ||
        action.type == type.SET_JURISDICCION ||
        action.type == type.SET_ORGANISMO_DEPENDENIA ||
        action.type == type.SET_NIVEL ||
        action.type == type.SET_MODALIDAD ||
        action.type == type.SET_GESTION ||
        action.type == type.SET_AMBITO ||
        action.type == type.SET_INTENET ||
        action.type == type.SET_PROVEEDORES_INTERNET ||
        action.type == type.SET_CABECERAS ||
        action.type == type.SET_AULA_DIGITAL_MOVIL ||
        action.type == type.SET_PLAN_CONECTIVIDAD ||
        action.type == type.SET_AGUA_POTABLE
    ) {
        //Condicion de Filtrado
        let filterCondition = {
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
            internetProveedores: true,
            cabeceras: true,
            ADM: true,
            planConectividadLineaC: true,
            aguaPotable: true,
            agrupaciones: true
        }
        const isTrue = (e => e === true)
        let marcadoresFiltered = localizaciones.filter(l => {

            //HEADER FILTER
            if (filtro.header.length > 0) {
                return filtro.header.includes(l) ? true : false
            }

            //DEPARTAMENTOS FILTRO
            filterCondition["departamento"] = l.domicilio
                ? filtro.departamentos.includes(l.domicilio.departamento.id.toString())
                    ? true
                    : false
                : false

            //LOCALIDADES FILTRO
            filterCondition["localidades"] = l.domicilio
                ? filtro.localidades.includes(l.domicilio.localidad.id.toString())
                    ? true
                    : false
                : false

            //DEPENDENCIA FILTRO ["Provincial", "Municipal", "Nacional"]
            filterCondition["dependencias"] = l.establecimiento
                ? filtro.dependencias.includes(l.establecimiento.dependencia)
                    ? true
                    : false
                : false

            //ESTADO FILTRO
            filterCondition["estados"] = l.estado
                ? filtro.estados.includes(l.estado.id)
                    ? true
                    : false
                : false

            //JURISDICCION FILTRO
            if (filtro.jurisdicciones.length > 0) {
                filterCondition['jurisdicciones'] = l.colegio
                    ? filtro.jurisdicciones.includes(l.colegio.jurisdiccion)
                        ? true
                        : false
                    : false
            }

            //ORGANISMOS DEPENDENCIAS FILTRO
            if (filtro.organismoDependencias.length > 0) {
                filterCondition['organismoDependencias'] = l.colegio
                    ? filtro.organismoDependencias.includes(l.colegio.nivelJur)
                        ? true
                        : false
                    : false
            }

            //NIVELES FILTRO
            if (filtro.niveles.length > 0) {
                filterCondition['niveles'] = l.ofertas
                    ? Object.values(l.ofertas).some(o => filtro.niveles.includes(o.idOferta))
                        ? true
                        : false
                    : false
            }

            //MODALIDADES FILTRO
            if (filtro.modalidades.length > 0) {
                filterCondition['modalidades'] = l.ofertas
                    ? Object.values(l.ofertas).some(o => filtro.modalidades.includes(o.modalidad))
                        ? true
                        : false
                    : false
            }

            //GESTIONES FILTRO
            if (filtro.gestiones.length > 0) {
                filterCondition['gestiones'] = l.establecimiento
                    ? filtro.gestiones.includes(l.establecimiento.sector)
                        ? true
                        : false
                    : false
            }

            //AMBITOS FILTRO
            if (filtro.ambitos.length > 0) {
                filterCondition['ambitos'] = l.ambito
                    ? filtro.ambitos.includes(l.ambito.id.toString())
                        ? true
                        : false
                    : false
            }

            //INTERNET FILTRO
            if (filtro.internet.length > 0) {
                if (filtro.internet.includes("tiene") && filtro.internet.includes("notiene")) {
                    filterCondition['internet'] = l.colegio
                        ? l.colegio.internet
                            ? true
                            : true
                        : false
                }
                else if (filtro.internet.includes("tiene")) {
                    filterCondition['internet'] = l.colegio
                        ? l.colegio.internet
                            ? true
                            : false
                        : false
                }
                else if (filtro.internet.includes("notiene")) {
                    filterCondition['internet'] = l.colegio
                        ? l.colegio.internet
                            ? false
                            : true
                        : false
                }
            }

            //INTERNET PROVEEDORES FILTRO
            if (filtro.proveedoresInternet.length > 0) {
                filterCondition['internetProveedores'] = l.conexiones
                    ? Object.values(l.conexiones).some(o => filtro.proveedoresInternet.includes(o.conexionProveedor.id.toString()))
                        ? true
                        : false
                    : false
            }

            //DEPARTAMENTOS CABECERAS
            if (filtro.cabeceras.length > 0) {
                filterCondition["cabeceras"] = l.cueanexo
                    ? cabecerasJson.filter((e) => e["CUA-ANEXO"] == l.cueanexo).length > 0
                        ? true
                        : false
                    : false;
            }

            //AULA DIGITAL MOVIL
            if (filtro.aulaDigitalMoviles.length > 0) {
                filterCondition['ADM'] = l.colegio
                    ? l.colegio.adm
                        ? true
                        : false
                    : false
            }

            //PLAN CONECTIVIDAD
            if (filtro.planConectividad.includes("lineaC") && filtro.planConectividad.includes("noLineaC")) {
                filterCondition['planConectividadLineaC'] = true
            }
            else {
                if (filtro.planConectividad.includes("lineaC")) {
                    filterCondition['planConectividadLineaC'] = lineaCJson.filter((e) => e["CueAnexo"] == l.cueanexo).length > 0
                        ? true
                        : false
                }

                if (filtro.planConectividad.includes("noLineaC")) {
                    filterCondition['planConectividadLineaC'] = lineaCJson.filter((e) => e["CueAnexo"] == l.cueanexo).length > 0
                        ? false
                        : true
                }
            }

            //AGUA POTABLE
            if (filtro.aguaPotable.length > 0) {
                filterCondition['aguaPotable'] = l.agua
                    ? filtro.aguaPotable.includes(l.agua.tiene.toString())
                        ? true
                        : false
                    : false
            }

            //AGRUPACIONES
            if (filtro.agrupaciones.length > 0) {
                if (filtro.agrupaciones.includes("efas")) {
                    filterCondition['agrupaciones'] = efasJson.filter(e => e['cueanexo'] == l.cueanexo).length > 0
                        ? true
                        : false
                }
            }

            return Object.values(filterCondition).every(isTrue);
        })

        next({ type: type.SET_MARCADORES, payload: marcadoresFiltered })

        // console.log("STATE AFTER LOGIC", store.getState());
    }
};


export default marcadoresFilterMiddleware