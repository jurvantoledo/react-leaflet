import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import "./Map.css"

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
            bounds={bounds}
            id="secretgarden V1"
            style={{backgroundColor: "#fff"}}
        >
            <TileLayer
                url={`maps/images/{z}/{x}/{y}.jpg`}
                noWrap={true}
            />
            <MapMarker position={position} text='kiwi tunnel' />
            <MapMarker position={position2} text='poort' />
        </MapContainer>
    )
}