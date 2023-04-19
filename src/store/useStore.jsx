import { create } from "zustand";
import { fetchGEOJSON, fetchJSON } from "../utils";

let qr = false;
let activeId = false;

const url = window.location.href;
const ids = ["", "water", "fire", "earth", "air"];

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
    narratives: ["", "water", "fire", "earth", "air"],
    activeId: activeId,
    qr: qr,
    playing: false,
    modalContent: 0,
    status: "idle",
    intro: true,
    language: "eng",

    recordings: {
        eng: {
            water: "./Recordings/Eng/Water.mp3",
            earth: "./Recordings/Eng/Earth.mp3",
            air: "./Recordings/Eng/Air.mp3",
            fire: "./Recordings/Eng/Fire.mp3",
        },
        cat: {
            water: "./Recordings/Cat/Agua.mp3",
            earth: "./Recordings/Cat/Terra.mp3",
            air: "./Recordings/Cat/Aire.mp3",
            fire: "./Recordings/Cat/Fuego.mp3",
        },
    },

    fonts: ["'Sora', sans-serif", "'Manrope', sans-serif"],

    prompts: [
        "",
        "the city is on fire",
        "a flooded cityscape",
        "a desert cityscape, trees with no leaves, dry",
        "a dusty cityscape, storm in the sky, Mars",
    ],

    palettes: {
        water: ["#388CDC", "#68F3F5", "#D6E7F2", "#5147B4"],
        earth: ["#7FB89B", "#DAAE78", "#AF9D72", "#3C544D"],
        air: ["#EBCDAE", "#E6EBED", "#AFA790", "#7F9AAF"],
        fire: ["#DE666E", "#ED6722", "#F1B09A", "#FDB84F"],
    },

    texts: {
        0: {
            title: { eng: "Listen", cat: "Escolta" },
            subtitle: {
                eng: "To start your journey, put in your earphones & press play",
                cat: "Per començar el viatge, poseu-vos els auriculars i premeu Reproduir",
            },
            icon: "listen_title",
            action: {
                eng: "Par al català premeu aquì",
                cat: "Press here for the english version",
            },
            actionFun: function () {
                const current = get().language;
                const languages = ["eng", "cat"];

                set((state) => ({
                    language: languages.filter((x) => !current.includes(x)),
                }));
            },
            button: ["play_btn", "pause_btn"],
        },
        1: {
            title: { eng: "See & Learn", cat: "Veure i aprendre" },
            subtitle: {
                eng: "Point the camera to the park and press capture to see more",
                cat: "Apunteu la càmera al parc i premeu captura per veure'n més",
            },
            action: {
                eng: "Take a picture around you",
                cat: "Fes una foto al teu voltant",
            },
            actionFun: function () {},
            icon: "see_title",
            button: "capture_btn",
            facts: {
                water: [
                    {
                        eng: "Barcelona is implementing “Experience the River Besòs. Plan for conserving and restoring ecosystems and biodiversity and for preserving the coastal space and water resources”.",
                        cat: "Barcelona està implementant “Viu el riu Besòs. Pla de conservació i restauració dels ecosistemes i de la biodiversitat i de preservació de l'espai costaner i dels recursos hídrics”.",
                    },
                    {
                        eng: "Barcelona is increasing the number of naturalised ponds and to make new naturalised head ponds in Collserola's torrents.",
                        cat: "Barcelona augmenta el nombre de basses naturalitzades i per fer noves basses de capçalera naturalitzades als torrents de Collserola.",
                    },
                    {
                        eng: "Barcelona is including the supply of alternative water resources in the new green spaces, wherever possible (for example, collection of rainwater).",
                        cat: "Barcelona inclou el subministrament de recursos hídrics alternatius als nous espais verds, sempre que sigui possible (per exemple, recollida d'aigua de pluja).",
                    },
                ],
                earth: [
                    {
                        eng: "Barcelona is implementing sustainable drainage systems & soil permeabilisation in public spaces, replacing paving with plants.",
                        cat: "Barcelona està implantant sistemes de drenatge sostenibles i permeabilització del sòl en espais públics, substituint paviments per plantes.",
                    },
                    {
                        eng: "Barcelona is planting trees and shrubs in parks and gardens to enrich the woody stratum, replace losses and improve biodiversity.",
                        cat: "Barcelona està plantant arbres i arbustos a parcs i jardins per enriquir l'estrat llenyós, compensar les pèrdues i millorar la biodiversitat.",
                    },
                    {
                        eng: "Barcelona is implementing fauna paths, butterfly gardens, tree plantations & more to boost the ecological connectivity of fauna & the general functioning of the ecosystem.",
                        cat: "Barcelona està implementant camins de fauna, jardins de papallones, plantacions d'arbres i més per augmentar la connectivitat ecològica de la fauna i el funcionament general de l'ecosistema.",
                    },
                ],
                air: [
                    {
                        eng: "Barcelona is connecting greenery projects inside the city and with the metropolitan green infrastructure, at the service of city residents.",
                        cat: "Barcelona connecta projectes de verd dins la ciutat i amb la infraestructura verda metropolitana, al servei dels ciutadans.",
                    },
                    {
                        eng: "Barcelona is planting trees that can absorb pollutant particles, helping to clean the air, and dampen the noise on our wide avenues.",
                        cat: "Barcelona està plantant arbres que puguin absorbir partícules contaminants, ajudant a netejar l'aire i esmorteir el soroll a les nostres amples avingudes.",
                    },
                    {
                        eng: "Barcelona is incorporating green roofs in big renovation projects and new public works ensuring compatibility with other environmental uses.",
                        cat: "Barcelona està incorporant cobertes verdes en grans projectes de rehabilitació i noves obres públiques garantint la compatibilitat amb altres usos ambientals.",
                    },
                ],
                fire: [
                    {
                        eng: "Barcelona is implementing projects under the Greenery Model to continue with the target of achieving 160 new hectares by 2030 (increasing the greenery by 1 m2 per resident).",
                        cat: "Barcelona està implementant projectes sota el Model Greenery per continuar amb l'objectiu d'aconseguir 160 noves hectàrees l'any 2030 (augmentar el verd en 1 m2 per habitant).",
                    },
                    {
                        eng: "Barcelona is creating biodiversity shelters in green spaces and drafting and applying conservation protocols for existing ones.",
                        cat: "Barcelona està creant refugis de biodiversitat en espais verds i elaborant i aplicant protocols de conservació dels existents.",
                    },
                    {
                        eng: "Barcelona is revising and updating current legislation regarding citizen action in urban greenery, legalisation of beekeeping, marketing of farming products, etc.",
                        cat: "Barcelona està revisant i actualitzant la legislació vigent en matèria d'actuació ciutadana en verd urbà, legalització de l'apicultura, comercialització de productes agrícoles, etc.",
                    },
                ],
            },
        },
        2: {
            title: { eng: "Explore", cat: "Explora" },
            subtitle: {
                eng: "Wondering how to take action? Explore projects for our future",
                cat: "Et preguntes com actuar? Exploreu projectes per al nostre futur",
            },
            action: {
                eng: "Go to a new experience",
                cat: "Anar a una nova experiència",
            },
            actionFun: function () {
                const activeId = get().activeId;
                const nextActiveId = activeId + 1;
                console.log(nextActiveId);
                get().resetModal();

                set((state) => ({
                    activeId: nextActiveId < 5 ? nextActiveId : 1,
                }));
            },
            icon: "learn_title",
            button: "redirect_btn",
            links: [
                "https://atlasofthefuture.org/project_small_topic/water/",
                "https://atlasofthefuture.org/project_small_topic/plants/",
                "https://atlasofthefuture.org/project_small_topic/carbon/",
                "https://atlasofthefuture.org/project_small_topic/air-pollution/",
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
        const language = get().language;
        set((state) => ({
            activeId: false,
            modalContent: 0,
            status: "idle",
            intro: true,
            language: language,
        }));
    },
}));
