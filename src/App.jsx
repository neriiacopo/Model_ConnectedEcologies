import React from "react";
import { useEffect } from "react";
import Basemap from "./Basemap.jsx";
import Card from "./Card.jsx";
import Homepage from "./Homepage.jsx";

export default function App() {
    return (
        <>
            <Basemap />
            <Card />
            <Homepage />
        </>
    );
}
