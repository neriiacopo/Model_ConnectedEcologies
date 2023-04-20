import React from "react";
import "leaflet/dist/leaflet.css";
import { Circle, MapContainer, ImageOverlay } from "react-leaflet";
import { useStore } from "./store/useStore.jsx";
import { useEffect, useState } from "react";

export default function Basemap() {
    const activeId = useStore((state) => state.activeId);
    const narratives = useStore.getState().narratives;
    const palettes = useStore.getState().palettes;
    const baseBounds = [
        [41.4024576644005009, 2.1816104321545526],
        [41.4058469378445082, 2.1901070323652134],
    ];
    const url = "./Basemap.png"; // or 'path/to/image.tif'

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

            setEntrances(db);
        }
        fetchGEOJSON("./entrances.geojson");
    }, []);

    const bounds = [
        [41.4035452292, 2.1852657369],
        [41.4047523249, 2.1864083579],
    ];

    const cStyle = { color: "transparent", fillOpacity: 1, weight: 0 };
    const bStyle = { color: "transparent", fillOpacity: 1, weight: 0 };

    function triggerPopup(id) {
        useStore.setState({ activeId: id });
    }

    return (
        <MapContainer
            maxZoom={20}
            bounds={bounds}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            zoomControl={false}
            style={{ height: "100vh", width: "100vw", pointerEvents: "none" }}
        >
            <ImageOverlay
                url={url}
                bounds={baseBounds}
            />

            {entrances.map((feature, index) => (
                <Circle
                    key={index}
                    center={feature.geometry.coordinates}
                    eventHandlers={{ click: () => triggerPopup(index + 1) }}
                    radius={20}
                    pathOptions={{
                        ...bStyle,
                    }}
                    style={{ pointerEvents: "auto" }}
                ></Circle>
            ))}
        </MapContainer>
    );
}
