import { Header, Icon } from "semantic-ui-react";
import { useStore } from "./store/useStore";
import "./style_ico.css";

export default function BubbleTitle() {
    const modalContent = useStore((state) => state.modalContent);
    const intro = useStore((state) => state.intro);
    const language = useStore((state) => state.language);
    const textsSettings = useStore((state) => state.texts[modalContent]);
    const fonts = useStore.getState().fonts;
    const margin = 50;

    const activeId = useStore.getState().activeId;
    const narrative = useStore.getState().narratives[activeId];
    const factId = useStore((state) => state.factId);
    const fact = useStore((state) => state.texts["1"].facts[narrative][factId]);
    const status = useStore((state) => state.status);

    const contTitle = {
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        marginTop: margin * 2,
        // marginTop: "30%",
        fontFamily: "Sora",
    };

    const contSubTitle = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        marginBottom: margin * 1,
        // marginBottom: "30%",
        padding: margin,
    };

    const contSubFacts = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        marginBottom: margin * 1.5,
        // marginBottom: "20%",
        padding: margin,
        color: "black",
    };

    return (
        <>
            <div style={contTitle}>
                {intro && textsSettings && (
                    <Header
                        as="h2"
                        icon
                        inverted
                        textAlign="center"
                    >
                        <Header.Subheader
                            style={{
                                fontStyle: "italic",
                                // fontFamily: fonts[0],
                                fontWeight: 400,
                            }}
                        >
                            {(modalContent + 1).toString().padStart(2, "0")}/03
                        </Header.Subheader>
                        <Header.Content
                            style={{
                                fontFamily: fonts[0],
                                fontWeight: 400,
                            }}
                        >
                            {textsSettings.title[language].toUpperCase()}
                        </Header.Content>
                        <i className={textsSettings.icon} />
                    </Header>
                )}
            </div>
            <div style={contSubTitle}>
                {intro && textsSettings && (
                    <Header
                        as="h4"
                        icon
                        inverted
                        textAlign="center"
                    >
                        <Header.Content>
                            <span
                                style={{
                                    // fontFamily: fonts[0],
                                    fontWeight: 200,
                                }}
                            >
                                {textsSettings.subtitle[language].toUpperCase()}
                            </span>
                        </Header.Content>
                        {textsSettings.action[language] && (
                            <Header.Subheader
                                style={{
                                    // fontStyle: "italic",
                                    marginTop: margin / 2,
                                    // fontFamily: fonts[0],
                                    fontWeight: 200,
                                    pointerEvents: "auto",
                                }}
                            >
                                <u
                                    onClick={() => {
                                        textsSettings.actionFun();
                                    }}
                                >
                                    {textsSettings.action[language]}
                                </u>
                            </Header.Subheader>
                        )}
                    </Header>
                )}
            </div>

            <div style={contSubFacts}>
                {status == "frozen" && (
                    <Header
                        as="h4"
                        icon
                        inverted
                        textAlign="center"
                    >
                        <Header.Content
                            style={{
                                // backgroundColor: "rgba(0,0,0,0.3)",
                                // backgroundColor: "rgba(255,255,255,0.3)",
                                padding: "5px",
                                borderRadius: "20px",
                                border: "solid white",
                            }}
                            className="blurred_bg"
                        >
                            <span
                                style={{
                                    // fontFamily: fonts[0],
                                    fontWeight: 600,
                                    // color: "black",
                                    color: "white",
                                    // backgroundColor: "black",
                                    // lineHeight: "1.5em",
                                }}
                            >
                                {fact[language]}
                            </span>
                        </Header.Content>
                    </Header>
                )}
            </div>
        </>
    );
}
