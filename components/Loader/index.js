import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.5);
`;

export default function Loader() {
  return (
    <LoadingContainer>
      <CircularProgress color='black' />
    </LoadingContainer>
  );
}
