import React from "react";
import { connect } from "react-redux";
import * as type from "../../redux/types";
import { updateMarcadores } from "../../redux/actions/MarcadoresActions";

function FilterListener({ localizaciones, filtros, updateMarcadores, localidadesBase, setLocalidadesFiltered }) {
  const [filtered, setFiltered] = React.useState([]);
  //desctructuring
  const { departamentos, localidades } = filtros;

  //FILTRAR POR DEPARTAMENTO
  React.useEffect(async () => {
    let localidadesFiltered = []
    const filterByDepartamentos = localizaciones.filter((loc) => {
      if (loc.domicilio) {
        if (departamentos.includes(loc.domicilio.departamento.id)) {
          let locFiltered = localidadesBase.filter(localidad => localidad.departamento.id == loc.domicilio.departamento.id)
          locFiltered.map(locFil => {
            if (localidadesFiltered.indexOf(locFil) === -1)
              localidadesFiltered.push(locFil)
          })
          return true;
        }
      }
      return false;
    });
    setLocalidadesFiltered(localidadesFiltered)
    setFiltered(filterByDepartamentos);
  }, [departamentos]);

  //FILTAR POR LOCALIDADES (DEPENDE DE DEPARTAMENTOS)
  React.useEffect(async () => {
    const filter = filtered.filter(loc => {
      if (localidades.includes(loc.domicilio.localidad.id)) {
        return true
      }
    })

    setFiltered(filter)
  },[localidades])

  //FINAL
  React.useEffect(() => {
    updateMarcadores(filtered);
  }, [filtered]);
  return <div />;
}

const mapStateToProps = (state) => ({
  localizaciones: state.localizacion.localizaciones,
  filtros: state.filtro,
  departamentosBase: state.departamento.departamentos,
  localidadesBase: state.localidad.localidades
});

const mapDispatchToProps = (dispatch) => ({
  updateMarcadores: (arg) => dispatch(updateMarcadores(arg)),
  setLocalidadesFiltered: (arg) => dispatch({ type: type.PUT_LOCALIDADES_FILTERED, payload: arg })
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterListener);
