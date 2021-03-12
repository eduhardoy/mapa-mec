import { InfoWindow } from "@react-google-maps/api";
import React from "react";
import styled from "styled-components";
import useMap from "../../hooks/Map";

const InfoStyled = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 15;
  h1 {
    font-size: 15px;
    font-family: "Lato";
  }
  h3 {
    font-size: 12px;
    font-family: "Lato";
  }
`;

export const MapInfoWindow = () => {
  //LOGGER
  console.log("MapInfoWindow RENDERED")

  const { infowindow, setInfoWindow } = useMap()

  const closeInfoWindow = () => {
    setInfoWindow(false, null)
  }

  return (
    <>
      {infowindow.show &&
        <InfoWindow
          position={{
            lng: infowindow.data.domicilio.geo.geometry.coordinates[0],
            lat: infowindow.data.domicilio.geo.geometry.coordinates[1],
          }}
          onCloseClick={closeInfoWindow}
          options={{ pixelOffset: new google.maps.Size(0, -48) }}
        >
          <InfoStyled>
            <h1>{infowindow.data.colegio ? infowindow.data.colegio.nombre : ""}</h1>
            <h3>CUE: {infowindow.data.cueanexo}</h3>
          </InfoStyled>
        </InfoWindow>
      }
    </>
  );
};

export default MapInfoWindow;
