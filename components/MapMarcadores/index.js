import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import MapInfoWindow from "../MapInfoWindow";
import ItemMarker from "./ItemMarker";

const MapMarcadores = ({ map, marcadores }) => {
  const [positionInfoWindow, setPositionInfoWindow] = React.useState({});
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const [mapInfoData, setMapInfoData] = React.useState({});


  const closeInfoWindow = () => {
    setMapInfoData({});
    setShowInfoWindow(false);
  };

  return (
    <div>
      {marcadores.map(ele => {
        if (ele && ele.domicilio) {
          const latlng = {
            lng: ele.domicilio.geo.geometry.coordinates[0],
            lat: ele.domicilio.geo.geometry.coordinates[1],
          };
          return (
            <ItemMarker
              ele={ele}
              latlng={latlng}
              map={map}
              setMapInfoData={setMapInfoData}
              setPositionInfoWindow={setPositionInfoWindow}
              setShowInfoWindow={setShowInfoWindow}
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
