import { Header, Icon } from "semantic-ui-react";
import { useStore } from "./store/useStore";
import "./style_ico.css";

export default function BubbleTitle() {
    const modalContent = useStore((state) => state.modalContent);
    const intro = useStore((state) => state.intro);
    const texts = useStore((state) => state.texts);
    const fonts = useStore.getState().fonts;
    const margin = 50;

    const contTitle = {
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        marginTop: margin * 2.5,
        fontFamily: "Sora",
    };

    const contSubTitle = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        marginBottom: margin * 2,
        padding: margin,
    };

    return (
        <>
            <div style={contTitle}>
                {intro && texts && (
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
                            {texts[modalContent].title.toUpperCase()}
                        </Header.Content>
                        <i className={texts[modalContent].icon} />
                    </Header>
                )}
            </div>
            <div style={contSubTitle}>
                {intro && texts && (
                    <Header
                        as="h4"
                        icon
                        inverted
                        textAlign="center"
                    >
                        <Header.Content sub>
                            <span
                                style={{
                                    // fontFamily: fonts[0],
                                    fontWeight: 200,
                                }}
                            >
                                {texts[modalContent].subtitle.toUpperCase()}
                            </span>
                        </Header.Content>
                        {texts[modalContent].action && (
                            <Header.Subheader
                                style={{
                                    // fontStyle: "italic",
                                    marginTop: margin / 2,
                                    // fontFamily: fonts[0],
                                    fontWeight: 200,
                                }}
                            >
                                <u>{texts[modalContent].action}</u>
                            </Header.Subheader>
                        )}
                    </Header>
                )}
            </div>
        </>
    );
}
