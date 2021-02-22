// import React from "react";
// import { GoogleMap } from "@react-google-maps/api";

// const Spiderfy = (props) => {

//     const [oms, setOms] = React.useState(null)

//     React.useEffect(() => {
//         const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);

//         setOms(new oms.OverlappingMarkerSpiderfier(
//             props.map, // 1*
//             {}
//         ))
//     }, [])

//     const markerNodeMounted = async (ref) => {
//         setTimeout(() => { //3*
//             oms.addMarker(ref.marker); // 2*
//             window.google.maps.event.addListener(ref.marker, "spider_click", e => {
//                 if (props.onSpiderClick) props.onSpiderClick(e);
//             });
//         }, 2000);
//     }

//     return React.Children.map(props.children, child =>
//         React.cloneElement(child, { ref: (ref) => markerNodeMounted(ref) })
//     );
// }

// export default Spiderfy;