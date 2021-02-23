import React from "react";
import { MapContext } from "@react-google-maps/api";
import useConstructor from "../../hooks/Utilities/Constructor";
import useMap from "../../hooks/Map"

const Spiderfy = (props) => {
    const [oms, setOms] = React.useState(null)
    const { setInfoWindow } = useMap()

    useConstructor(() => {
        const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);
        setOms(new oms.OverlappingMarkerSpiderfier(
            MapContext._currentValue,
            {}
        ))
    })

    const markerNodeMounted = async ref => {
        if (ref) {
            oms.addMarker(ref.marker);
            //CHILDREN REF DATA
            const childrenEl = ref.props

            console.log(childrenEl)

            //SPIDER CLICK
            window.google.maps.event.addListener(ref.marker, "spider_click", e => {
                if (props.onSpiderClick) props.onSpiderClick(e);
            });

            //PRIMARY CLICK
            // google.maps.event.addListener(ref.marker, 'click', function () {
            //     setInfoWindow(true, childrenEl.data)
            // });
        }
    };

    return React.Children.map(props.children, child =>
        React.cloneElement(child, { ref: markerNodeMounted })
    );
};

export default Spiderfy;
