import { create } from "zustand";
import { fetchGEOJSON } from "../utils";

export let useStore = create((set, get) => ({
    entrances: fetchGEOJSON("/entrances.geojson"),
}));
