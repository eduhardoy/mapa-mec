import React, { useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import { connect, useSelector } from "react-redux";
import MapInfoWindow from "../MapInfoWindow";

const MapMarcadores = ({ map, marcadores }) => {
  const [positionInfoWindow, setPositionInfoWindow] = React.useState({});
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const [mapInfoData, setMapInfoData] = React.useState({});

  const clickMarker = (marcador, latlng) => {
    setMapInfoData(marcador);
    setPositionInfoWindow(latlng);
    setShowInfoWindow(true);
    map.panTo(latlng);
  };

  const closeInfoWindow = () => {
    setMapInfoData({});
    setShowInfoWindow(false);
  };

  const obtenerIcono = (ele) => {

    if (ele.domicilio.geo.geometry.coordinates.includes(0))
      return "./images/pinSinGeo.png"

    const inicial = [152, 155, 121, 122, 100, 101]
    const primaria = [136, 123, 126, 140, 102, 105, 153, 156, 158]
    const secundaria = [143, 144, 108, 109, 110, 111, 129, 130, 147, 148, 151, 154, 157, 159, 131, 132, 149, 150, 138]
    const superior = [117, 115]

    if (Object.values(ele.ofertas).every(e => inicial.includes(parseInt(e.idOferta))))
      return './images/pinIni.png'
    else if (Object.values(ele.ofertas).every(e => primaria.includes(parseInt(e.idOferta))))
      return './images/pinPrim.png'
    else if (Object.values(ele.ofertas).every(e => secundaria.includes(parseInt(e.idOferta))))
      return './images/pinSecu.png'
    else if (Object.values(ele.ofertas).every(e => superior.includes(parseInt(e.idOferta))))
      return './images/pinSup.png'

    let ar = []

    Object.values(ele.ofertas).map(e => {
      if (inicial.includes(parseInt(e.idOferta)))
        ar.push('inicial')
      if (primaria.includes(parseInt(e.idOferta)))
        ar.push('primaria')
      if (secundaria.includes(parseInt(e.idOferta)))
        ar.push('secundaria')
      if (superior.includes(parseInt(e.idOferta)))
        ar.push('superior')
    })

    if (ar.length == 0)
      return './images/pinComp.png'

    return './images/pinVar.png'
  }

  return (
    <div>
      {marcadores.map(ele => {
        if (ele && ele.domicilio) {
          const latlng = {
            lng: ele.domicilio.geo.geometry.coordinates[0],
            lat: ele.domicilio.geo.geometry.coordinates[1],
          };
          return (
            <Marker
              key={ele.cueanexo}
              position={latlng}
              icon={obtenerIcono(ele)}
              onClick={() => clickMarker(ele, latlng)}
            />
          );
        }
      })}
      {showInfoWindow && (
        <MapInfoWindow
          position={positionInfoWindow}
          closeInfoWindow={closeInfoWindow}
          info={mapInfoData}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  marcadores: state.marcador.marcadores,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapMarcadores);
