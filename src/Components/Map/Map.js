import React, { useState } from "react"
import { Circle, CircleMarker, FeatureGroup, LayerGroup, MapContainer, Marker, Popup, Rectangle, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import "./Map.css"
import ScrollButton from "../ScrollButton";
import { useMap } from "react-leaflet";
import MapCircle from "./MapCircle";

const mapBounds = [
    [-69.98155760646617, -180],
    [69.99346179538875, 180]
]
  
  function MapBounds() {
    const [bounds, setBounds] = useState(mapBounds)
    const map = useMap();

    map.setMaxBounds(bounds);

    map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: false });
    });

    return null;
  }

export default function SecretgardenMap(props) {
    const center = [-39.705, -9.50]
    const position = [-48.205, -39.00]
    const position2 = [-39.705, -9.50]

    return (
        <>
            <MapContainer
                className="markercluster-map"
                center={[0.0, 0.0]}
                zoom={0}
                continuousWorld={false}
                id="secretgarden V1"
                style={{backgroundColor: "#fff"}}
                scrollWheelZoom={false}
                doubleClickZoom={false}
            >
                <TileLayer
                    url={`maps/images/{z}/{x}/{y}.jpg`}
                    noWrap={true}
                    maxZoom={5}
                    minZoom={2}
                />
                <MapBounds />
                <MapMarker position={position} text='kiwi tunnel' />
                <MapCircle center={center} />
            </MapContainer>
        </>
    )
}