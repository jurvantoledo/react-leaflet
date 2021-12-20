import React, { useState, useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css"

// Temporary for adding marker to leaflet map
import L from "leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [18, 26],
    iconAnchor: [9, 26]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function SecretgardenMap() {
    const position = [-48.205, -39.00]
    const position2 = [-39.705, -9.50]
    const [bounds, setBounds] = useState([
        [5.712, -15.227],
        [5.774, -15.125]
    ])

    return (
        <MapContainer
            className="markercluster-map"
            center={[0.0, 0.0]}
            maxZoom={5}
            minZoom={2}
            zoom={0}
            continuousWorld={false}
            // maxBounds={bounds}
            id="secretgarden V1"
            style={{backgroundColor: "#fff"}}
        >
            <TileLayer
                url={`maps/images/{z}/{x}/{y}.jpg`}
                noWrap={true}
            />
            <Marker position={position}>
                <Popup>
                    Kiwi tunnel
                </Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>
                    Poort
                </Popup>
            </Marker>
        </MapContainer>
    )
}