import React from "react";
import { connect } from "react-redux";
import { updateMarcadores } from "../../redux/actions/MarcadoresActions";

function FilterListener({ localizaciones, filtros, updateMarcadores }) {
  const [filtered, setFiltered] = React.useState([]);
  //desctructuring
  const { departamentos } = filtros;

  //FILTRAR POR DEPARTAMENTO
  React.useEffect(async () => {
    const filterByDepartamentos = localizaciones.filter((loc) => {
      if (loc.domicilio) {
        return departamentos.includes(loc.domicilio.departamento.id);
      }
      return false;
    });
    console.log("FILTRO_DEPARTAMENTO", filterByDepartamentos);
    setFiltered(filterByDepartamentos);
  }, [departamentos]);

  //FINAL
  React.useEffect(() => {
    updateMarcadores(filtered);
  }, [filtered]);
  return <div />;
}

const mapStateToProps = (state) => ({
  localizaciones: state.localizacion.localizaciones,
  filtros: state.filtro,
  departamentos: state.departamento.departamentos,
});

const mapDispatchToProps = (dispatch) => ({
  updateMarcadores: (arg) => dispatch(updateMarcadores(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterListener);
