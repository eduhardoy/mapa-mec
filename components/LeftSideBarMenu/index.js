import * as React from "react";
import styled from "styled-components";

// styles

const LeftSideBarMenuStyle = styled.main`
  background-color: #fff;
  border-right: solid #D3D3D3 2px;
  box-shadow: 1px 0px 8px 1px rgba(211,211,211,0.72);
  height: calc(100vh - 77px);
  width: 4vw;
  min-width: 50px;
  position: sticky;
  z-index: 4;
  bottom: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const BarIconContainer = styled.div `
width: 100%;
height: 60%;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
`

const IconButton = styled.button `
width: 100%;
height: 10%;
margin-top: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
border: none;
background-color: #fff;
cursor: pointer;
:hover{
  img{
    width: 85%;
  }
}
:focus{
  border: none;
  outline:none;
  img{
    width: 85%;
  }
}
img{
  width: 65%;
  height: auto;
  margin: 0;
}
`

const Account = styled.button `
width: 100%;
height: 8%;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
border: none;
background-color: #fff;
:hover{
  img{
    width: 85%;
  }
}
:focus{
  border: none;
  outline:none;
  img{
    width: 85%;
  }
}
img{
  width: 80%;
  height: auto;
}
`


// markup
const LeftSideBarMenu = () => {
  return <LeftSideBarMenuStyle>
    <BarIconContainer>
      <IconButton>
      <img src="./images/mapa.png" alt=""/>
      </IconButton>
      <IconButton>
      <img src="./images/info.png" alt=""/>
      </IconButton>
      <IconButton>
      <img src="./images/settings.png" alt=""/>
      </IconButton>
      <IconButton>
      <img src="./images/wifi.png" alt=""/>
      </IconButton>
    </BarIconContainer>
    <Account>
    <img src="./images/user.png" alt=""/>
    </Account>
  </LeftSideBarMenuStyle>;
};

export default LeftSideBarMenu;