import React from "react";
import "leaflet/dist/leaflet.css";
import { Circle, TileLayer, MapContainer } from "react-leaflet";
import { useStore } from "./store/useStore.jsx";
import { useEffect, useState } from "react";

export default function Basemap() {
    const [entrances, setEntrances] = useState([]);

    useEffect(() => {
        async function fetchGEOJSON(path) {
            const response = await fetch(path);
            const data = await response.json();
            const db = [];

            data.features.map((feature) => {
                feature.geometry.coordinates.reverse();
                db.push(feature);
            });

            console.log(db);
            setEntrances(db);
        }
        fetchGEOJSON("./entrances.geojson");
    }, []);

    const position = [41.404096304379244, 2.1857834057224865];

    const bounds = [
        [41.4035452292, 2.1852657369],
        [41.4047523249, 2.1864083579],
    ];

    const cStyle = { fillColor: "white", color: "black", fillOpacity: 1 };

    function triggerPopup(id) {
        console.log(id);
    }

    return (
        <MapContainer
            center={position}
            maxZoom={20}
            bounds={bounds}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            zoomControl={false}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                maxZoom={20}
            />

            {entrances.map((feature, index) => (
                <Circle
                    key={index}
                    center={feature.geometry.coordinates}
                    eventHandlers={{ click: () => triggerPopup(index) }}
                    radius={2}
                    pathOptions={cStyle}
                ></Circle>
            ))}
        </MapContainer>
    );
}
