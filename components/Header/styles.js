import styled from "styled-components";

export const StyledLoginModal = styled.div`
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

export const LoginTitleWrapper = styled.div`
  height: 20%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormWrapper = styled.div`
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  outline: none;
  background-color: transparent;
`;
