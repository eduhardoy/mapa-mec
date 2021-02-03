import React, { useEffect } from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";

const TestMap = () => {
  return (
    <StaticGoogleMap
      apiKey="AIzaSyB9T71MrqTWubzHayatyn7RP5lpDMdcrgo"
      size="600x600"
    >
      <Marker.Group label="T" color="brown">
        <Marker location="40.737102,-73.990318" />
        <Marker location="40.749825,-73.987963" />
      </Marker.Group>
    </StaticGoogleMap>
  );
};

export default TestMap;
