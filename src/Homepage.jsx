import { Image, Button, Header } from "semantic-ui-react";

export default function Homepage() {
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
                <Header
                    as="h4"
                    textAlign="center"
                    style={botmLeft}
                >
                    <Header.Content
                        style={{
                            fontWeight: 500,
                        }}
                    >
                        ABOUT
                    </Header.Content>
                </Header>
            </div>
        </>
    );

    return <></>;
}
