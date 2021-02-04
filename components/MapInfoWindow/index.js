import { InfoWindow } from "@react-google-maps/api";
import React from "react";
import styled from "styled-components";

const InfoStyled = styled.div`
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 15;
`;

export const MapInfoWindow = ({ position, closeInfoWindow, info }) => {
  return (
    <InfoWindow position={position} onCloseClick={closeInfoWindow} >
      <InfoStyled>
        <h1>InfoWindow</h1>
        <h3>CUE: {info.cueanexo}</h3>
      </InfoStyled>
    </InfoWindow>
  );
};

export default MapInfoWindow;
