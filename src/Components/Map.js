import React from "react"
import { MapContainer, TileLayer } from "react-leaflet";
import {CRS} from 'leaflet';
import "./Map.css"

export default function SecretgardenMap() {
    return (
        <MapContainer
        className="markercluster-map"
        center={[0.0, 0.0]}
        maxZoom={5}
        minZoom={2.5}
        zoom={0}
        continuousWorld={false}
        id="secretgarden V1"
        >
            <TileLayer
                url={`maps/images/{z}/{x}/{y}.jpg`}
            />
        </MapContainer>
    )
}