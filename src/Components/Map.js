import React, { useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css"

// Temporary for adding marker to leaflet map
import L from "leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function SecretgardenMap() {
    const position = [0.505, -0.09]

    return (
        <MapContainer
        className="markercluster-map"
        center={[0.0, 0.0]}
        maxZoom={5}
        minZoom={2}
        zoom={0}
        continuousWorld={false}
        id="secretgarden V1"
        >
            <TileLayer
                url={`maps/images/{z}/{x}/{y}.jpg`}
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}