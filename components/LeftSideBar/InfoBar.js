import * as React from "react";
import styled from "styled-components";
import useBars from "../../hooks/Bars";
import InfoWrapper from "../Filters/InfoWrapper";
import GetAppIcon from "@material-ui/icons/GetApp";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

// styles
const InfoBarStyle = styled.div`
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 30vw;
  min-width: 350px;
  z-index: 9;
  position: absolute;
  left: 70px;
  bottom: 0;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  @media (max-width: 426px) {
    height: calc(100% - 177px);
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
  }
`;

const InfoTitleContainer = styled.div`
  width: 100%;
  height: 15%;
  padding-top: 10px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
`;

const InfoTitle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
  }
`;
const InfoDownload = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Download = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 50%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
  }
`;

const Total = styled.div`
  width: 60%;
  p {
    font-size: 12px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  font-family: "Lato", sans-serif;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
`;

// markup
const InfoBar = () => {
  const { secondBar } = useBars();
  return (
    <InfoBarStyle display={secondBar == "INFO" ? "flex" : "none"}>
      <InfoTitleContainer>
        <InfoTitle>
          <p>INFORMACION</p>
        </InfoTitle>
        <InfoDownload>
          <Total>
            <p>TOTAL:</p>
          </Total>
          <Download>
            <button>
              <CloudDownloadIcon />
            </button>
            <button>
              <GetAppIcon />
            </button>
          </Download>
        </InfoDownload>
      </InfoTitleContainer>
      <InfoContainer>
        <InfoWrapper />
      </InfoContainer>
    </InfoBarStyle>
  );
};

export default InfoBar;
