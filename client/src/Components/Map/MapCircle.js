import React from "react";
import { Circle, Tooltip } from "react-leaflet";

const MapCircle = props => {
    return (
        <Circle center={props.center} color="black" radius={200000}>
            <Tooltip permanent>Poort</Tooltip>
        </Circle>
    )
}

export default MapCircle;