import { InfoWindow } from "@react-google-maps/api";
import React from "react";
import styled from "styled-components";

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

export const MapInfoWindow = ({ position, closeInfoWindow, info }) => {
  return (
    <InfoWindow position={position} onCloseClick={closeInfoWindow}>
      <InfoStyled>
        <h1>{info.colegio ? info.colegio.nombre : ""}</h1>
        <h3>CUE: {info.cueanexo}</h3>
      </InfoStyled>
    </InfoWindow>
  );
};

export default MapInfoWindow;
