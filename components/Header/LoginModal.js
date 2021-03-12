import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const StyledLoginModal = styled.div`
  width: 30%;
  min-width: 350px;
  height: 50%;
  z-index: 99999;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 426px) {
    height: 80%;
    width: 80%;
  }
`;

const LoginTitleWrapper = styled.div`
  height: 20%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormWrapper = styled.div`
  height: 70%;
  width: 100%;
  input {
    border: black solid 2px;
    padding-left: 20px;
    font-size: 16px;
    width: 250px;
    height: 40px;
    margin-top: 20px;
  }
  button {
    font-size: 16px;
    background-color: #28a745;
    color: white;
    outline: none;
    border: none;
    width: 150px;
    height: 40px;
    margin-top: 30px;
    :hover {
      border: 3px solid #b9e2c2;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const LoginModal = () => {
  return (
    <StyledLoginModal>
      <CloseButton>
        <CloseIcon />
      </CloseButton>
      <LoginTitleWrapper>
        <h4>INGRESAR</h4>
      </LoginTitleWrapper>
      <LoginFormWrapper>
        <LoginForm>
          <input type='text' placeholder='Usuario' />
          <input type='password' placeholder='Contraseña' />
          <button>Iniciar Sesión</button>
        </LoginForm>
      </LoginFormWrapper>
    </StyledLoginModal>
  );
};

export default LoginModal;
