import React, { useEffect } from "react";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import MapMarcadores from "../MapMarcadores";
import styled from "styled-components";

//TODO Map Container styled component as MapContainer
const MapContainer = styled.div`
  width: ${props => props.ancho}; //CALCULAR WIDT BASADO EN PROPS
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
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB9T71MrqTWubzHayatyn7RP5lpDMdcrgo"
  })
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <MapContainer>
      {isLoaded
        ? <MapContainer ancho={"100vw"}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: -28.737328845367706, lng: -57.722286004532684 }}
            zoom={8}
            options={{
              mapTypeControl: true,
              mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                // mapTypeIds: ["roadmap", "terrain"],
                position: google.maps.ControlPosition.TOP_RIGHT
              },
              streetViewControl: false,
              fullscreenControl: false,
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <MapMarcadores map={map} />
          </GoogleMap>
        </MapContainer>
        : <>Loading...</>
      }
    </MapContainer>
  )
}

export default React.memo(MyComponent);
