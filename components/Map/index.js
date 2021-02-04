import React, { useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarcadores from "../MapMarcadores";
import styled from "styled-components";

//TODO Map Container styled component as MapContainer
const MapContainer = styled.div`
  width:${props => props.ancho}; //CALCULAR WIDT BASADO EN PROPS
  height: calc(100vh - 77px);
  right: 0px;
  position: absolute;
`;
const containerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  right: "0",
};

function MyComponent() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <MapContainer ancho={'100vh'}>
      <LoadScript googleMapsApiKey="AIzaSyB9T71MrqTWubzHayatyn7RP5lpDMdcrgo">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: -27.894283, lng: -58.301018 }}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            region: "005",
          }}
        >
          <MapMarcadores map={map} />
        </GoogleMap>
      </LoadScript>
    </MapContainer>
  );
}

export default React.memo(MyComponent);
