import { Marker } from "@react-google-maps/api";
import React from "react";
import useMarcadores from "../../hooks/Marcadores";
import { MapContext } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import * as type from "../../redux/types"


const MapMarcadores = (props) => {
  //LOGGER
  console.log("MapMarcadores RENDERED")

  //OMS
  const [oms, setOms] = React.useState(() => {
    const OverlappingMarkerSpiderfier = require(`overlapping-marker-spiderfier`);
    return new OverlappingMarkerSpiderfier(
      MapContext._currentValue,
      {}
    )
  })

  //MARCADORES
  const { marcadores } = useMarcadores()

  //REFERENCIAS
  const markersRef = React.useRef([])

  //INFOWINDOW DISPATCHER
  const dispatch = useDispatch()
  const setInfoWindow = (show, data) => {
    dispatch({
      type: type.SHOW_INFO_WINDOW,
      payload: { show, data }
    })
  }


  //MARCADORES LOGICA
  React.useEffect(() => {
    markersRef.current = markersRef.current.slice(0, marcadores.length)

    oms.clearMarkers()
    markersRef.current.map(el => {
      //SPIDERFY
      if (!oms.getMarkers().includes(el.marker))
        oms.addMarker(el.marker);
    })
  }, [marcadores]);

  React.useEffect(() => {
    //Reiniciar Listeners
    oms.clearListeners("click")
    oms.clearListeners("spiderfy")

    //SPIDER CLICK
    oms.addListener("click", (marker, ev) => {
      const ele = markersRef.current[parseInt(marker.title)].props.data
      console.log(ele)
      setInfoWindow(true, ele)
      props.map.panTo({
        lng: ele.domicilio.geo.geometry.coordinates[0],
        lat: ele.domicilio.geo.geometry.coordinates[1],
      })
    });

    //SPIDERFY
    oms.addListener("spiderfy", markers => {
    });
  }, [])

  return (
    <>
      {
        marcadores.map((ele, i) => {
          if (ele.domicilio) {
            const latlng = {
              lng: ele.domicilio.geo.geometry.coordinates[0],
              lat: ele.domicilio.geo.geometry.coordinates[1],
            };
            return (
              <Marker
                title={`${i}`}
                key={ele.cueanexo}
                position={latlng}
                icon={obtenerIcono(ele)}
                ref={el => markersRef.current[i] = el}
                data={ele}
              />
            );
          }
        })
      }
    </>
  )
}

const obtenerIcono = (ele) => {

  if (ele.domicilio.geo.geometry.coordinates.includes(0))
    return "./images/pinSinGeo.png"

  const inicial = [152, 155, 121, 122, 100, 101]
  const primaria = [136, 123, 126, 140, 102, 105, 153, 156, 158]
  const secundaria = [143, 144, 108, 109, 110, 111, 129, 130, 147, 148, 151, 154, 157, 159, 131, 132, 149, 150, 138]
  const superior = [117, 115]

  if (Object.values(ele.ofertas).every(e => inicial.includes(parseInt(e.idOferta))))
    return './images/pinIni.png'
  else if (Object.values(ele.ofertas).every(e => primaria.includes(parseInt(e.idOferta))))
    return './images/pinPrim.png'
  else if (Object.values(ele.ofertas).every(e => secundaria.includes(parseInt(e.idOferta))))
    return './images/pinSecu.png'
  else if (Object.values(ele.ofertas).every(e => superior.includes(parseInt(e.idOferta))))
    return './images/pinSup.png'

  let ar = []

  Object.values(ele.ofertas).map(e => {
    if (inicial.includes(parseInt(e.idOferta)))
      ar.push('inicial')
    if (primaria.includes(parseInt(e.idOferta)))
      ar.push('primaria')
    if (secundaria.includes(parseInt(e.idOferta)))
      ar.push('secundaria')
    if (superior.includes(parseInt(e.idOferta)))
      ar.push('superior')
  })

  if (ar.length == 0)
    return './images/pinComp.png'

  return './images/pinVar.png'
}


export default MapMarcadores;
