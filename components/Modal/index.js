import React, { useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(40, 40, 40, 0.6);
  display: none;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ children }) => {
  return <StyledModal>{children}</StyledModal>;
};

export default Modal;
