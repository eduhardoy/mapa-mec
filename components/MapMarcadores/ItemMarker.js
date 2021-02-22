import React from "react"
import { Marker } from "@react-google-maps/api";

const ItemMarker = (props) => {

    const markEl = React.useRef(null)


    const OverlappingMarkerSpiderfier = require("overlapping-marker-spiderfier");
    const oms = new OverlappingMarkerSpiderfier(
        props.map, // 1*
        { legWeight: 3 }
    )

    oms.addListener('click', function (marker, event) {
        iw.setContent(marker.desc);
        iw.open(map, marker);
    });

    const clickMarker = (marcador, latlng) => {
        props.setMapInfoData(marcador);
        props.setPositionInfoWindow(latlng);
        props.setShowInfoWindow(true);
        props.map.panTo(latlng);
    };

    return (
        <Marker
            key={props.ele.cueanexo}
            position={props.latlng}
            icon={obtenerIcono(props.ele)}
            onClick={() => clickMarker(props.ele, props.latlng)}
            ref={markEl}
        />
    )
}

export default ItemMarker

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