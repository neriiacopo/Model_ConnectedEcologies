import { Image, Button, Header } from "semantic-ui-react";
import { useStore } from "./store/useStore";
import About from "./About";

export default function Homepage() {
    const about = useStore((state) => state.about);
    const margin = 20;

    const contStyle = {
        zIndex: 1001,
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        textAlign: "middle",
        backgroundColor: !about ? "transparent" : "white",
        pointerEvents: !about ? "none" : "auto",
    };

    const topRight = {
        position: "absolute",
        right: 0,
        margin: margin + "px",
        pointerEvents: "auto",
    };

    const topLeft = {
        position: "absolute",
        left: 0,
        top: 0,
        margin: margin + "px",
        pointerEvents: "auto",
    };

    const botmLeft = {
        position: "absolute",
        left: 0,
        bottom: 0,
        margin: margin + "px",
        pointerEvents: "auto",
    };

    const primary = {
        backgroundColor: "black",
        color: "white",
        border: "solid 1px white",
    };

    return (
        <>
            <div style={contStyle}>
                <Image
                    width={100}
                    style={topLeft}
                    src="./Logos/Connected Ecologies Logo2.png"
                />

                <Image
                    width={125}
                    style={topRight}
                    src="./Logos/Model Logo.png"
                />
                {about && (
                    <>
                        <About />
                    </>
                )}
                {!about && (
                    <Header
                        as="h4"
                        textAlign="center"
                        style={botmLeft}
                    >
                        <Header.Content
                            style={{
                                fontWeight: 500,
                            }}
                            onClick={() => useStore.setState({ about: true })}
                        >
                            ABOUT
                        </Header.Content>
                    </Header>
                )}
            </div>
        </>
    );

    return <></>;
}
