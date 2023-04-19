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
    const fact = useStore(
        (state) => state.texts["1"].facts[narrative][0][language]
    );
    const status = useStore((state) => state.status);

    const contTitle = {
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        // marginTop: margin * 2.5,
        marginTop: "30%",
        fontFamily: "Sora",
    };

    const contSubTitle = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        // marginBottom: margin * 2,
        marginBottom: "30%",
        padding: margin,
    };

    const contSubFacts = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        // marginBottom: margin * 2,
        marginBottom: "20%",
        padding: margin,
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
                {status == "loading" && (
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
                                    fontWeight: 500,
                                }}
                            >
                                {fact}
                            </span>
                        </Header.Content>
                    </Header>
                )}
            </div>
        </>
    );
}
