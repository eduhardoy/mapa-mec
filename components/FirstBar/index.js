import * as React from "react";
import styled from "styled-components";
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import WifiIcon from '@material-ui/icons/Wifi';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EqualizerIcon from '@material-ui/icons/Equalizer';


// styles
const FirstBarStyle = styled.div `
  width: 100%;
  height: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const IconButton = styled.button`
  width: 100%;
  height: 15%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    svg {
      width: 90%;
    }
  }
  :focus {
    border: none;
    outline: none;
    svg {
      width: 90%;
    }
  }
  svg {
    width: 70%;
    color: #666666;
    height: auto;
    margin: 0;
  }
`;

// markup
const FirstBar = () => {

  return (
    <FirstBarStyle>
        <IconButton>
          <MapIcon/>
        </IconButton>
        <IconButton>
          <InfoIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <IconButton>
          <FullscreenIcon/>
        </IconButton>
        <IconButton>
          <WifiIcon/>
        </IconButton>
        <IconButton>
          <LocationCityIcon/>
        </IconButton>
        <IconButton>
          <EqualizerIcon/>
        </IconButton>
    </FirstBarStyle>
  );
};

export default FirstBar;