import React, { useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import MapInfoWindow from "../MapInfoWindow";

const MapMarcadores = ({ map }) => {
  const { marcadores } = useSelector((state) => state.marcador);
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
  return (
    <div>
      {marcadores.map((ele) => {
        if (ele && ele.domicilio) {
          const latlng = {
            lng: ele.domicilio.geo.geometry.coordinates[0],
            lat: ele.domicilio.geo.geometry.coordinates[1],
          };
          return (
            <Marker
              key={ele.cueanexo}
              position={latlng}
              icon="./images/pin-varios.png"
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

export default MapMarcadores;
