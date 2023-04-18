import { create } from "zustand";
import { fetchGEOJSON, fetchJSON } from "../utils";

let qr = false;
let activeId = false;

const url = window.location.href;
const ids = ["water", "fire", "earth", "air"];

ids.map((id, index) => {
    const bool = url.match(id);
    if (bool) {
        // localStorage.setItem("qr", id);
        activeId = index;
        qr = true;
    }
});

export let useStore = create((set, get) => ({
    entrances: fetchGEOJSON("/entrances.geojson"),
    narratives: ["", "water", "earth", "air", "fire"],
    activeId: activeId,
    qr: qr,
    playing: false,
    modalContent: 0,
    status: "idle",
    intro: true,

    fonts: ["'Sora', sans-serif", "'Manrope', sans-serif"],

    prompts: [
        "",
        "a flooded cityscape",
        "a desert cityscape, trees with no leaves, dry",
        "a dusty cityscape, storm in the sky, Mars",
        "the city is on fire",
    ],

    palettes: {
        water: ["#388CDC", "#68F3F5", "#D6E7F2", "#5147B4"],
        earth: ["#7FB89B", "#DAAE78", "#AF9D72", "#3C544D"],
        air: ["#EBCDAE", "#E6EBED", "#AFA790", "#7F9AAF"],
        fire: ["#DE666E", "#ED6722", "#F1B09A", "#FDB84F"],
    },

    texts: {
        0: {
            title: "Listen",
            subtitle:
                "To start your journey, put in your earphones & press play",
            icon: "listen_title",
            action: "Par al català premeu aquì",
            button: ["play_btn", "pause_btn"],
        },
        1: {
            title: "See & Learn",
            subtitle:
                "Point the camera to the front and press capture to discover more",
            icon: "see_title",
            button: "capture_btn",
            facts: {
                water: [
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                ],
                earth: [
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                ],
                air: [
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                ],
                fire: [
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                    { eng: "TEXT HERE", cat: "TEXT HERE" },
                ],
            },
        },
        2: {
            title: "Explore",
            subtitle:
                "Wondering how to take action? Explore projects for our future",
            action: "Go to a new experience",
            icon: "learn_title",
            button: "redirect_btn",
            links: [
                "https://atlasofthefuture.org/?sfid=129&_sft_project_theme=water",
                "https://atlasofthefuture.org/?sfid=129&_sft_project_theme=biodiversity",
                "https://atlasofthefuture.org/?sfid=129&_sft_project_theme=energy",
                "https://atlasofthefuture.org/?sfid=129&_sft_project_theme=sustainability",
            ],
        },
    },

    changePage: (step) => {
        const modalContent = get().modalContent;
        if (step > 0) {
            set((state) => ({
                intro: true,
                modalContent: modalContent + step,
                status: "idle",
            }));
        } else {
            set((state) => ({
                modalContent: modalContent + step,
                status: "idle",
            }));
        }
    },

    removeIntro: () => {
        set((state) => ({
            intro: false,
        }));
    },

    resetModal: () => {
        set((state) => ({
            activeId: false,
            modalContent: 0,
            status: "idle",
            intro: true,
        }));
    },
}));
