import React from "react";
// For adding markers to leaflet map
import L from "leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker, Popup } from "react-leaflet";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [18, 26],
    iconAnchor: [9, 26]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapMarker = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>
                {props.text}
            </Popup>
        </Marker>
    )
}

export default MapMarker;