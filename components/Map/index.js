import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MapMarcadores from "../MapMarcadores";
import styled from "styled-components";
import MapInfoWindow from "../MapInfoWindow";

//TODO Map Container styled component as MapContainer
const MapContainer = styled.div`
  width: ${props => props.ancho}; //CALCULAR WIDT BASADO EN PROPS
  height: calc(100vh - 77px);
  bottom: 0;
  position: absolute;
  @media (max-width: 426px) {
    height: calc(100vh - 127px);
  }
`;

const containerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  bottom: "0",
};

const Map = () => {
  //LOGGER
  console.log("Map RENDERED");

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB9T71MrqTWubzHayatyn7RP5lpDMdcrgo",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MapContainer ancho={"100vw"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: -28.737328845367706, lng: -57.722286004532684 }}
        zoom={8}
        options={{
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // mapTypeIds: ["roadmap", "terrain"],
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
          streetViewControl: false,
          fullscreenControl: false,
          restriction: {
            latLngBounds: {
              north: -26,
              south: -31,
              east: -54,
              west: -60,
            },
          },
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {map &&
          <MapMarcadores map={map} />
        }
        <MapInfoWindow />
      </GoogleMap>
    </MapContainer>
  ) : (
    <>Loading...</>
  );
};

export default React.memo(Map);
