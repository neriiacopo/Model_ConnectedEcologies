import { useStore } from "./store/useStore";
import { Button, Header } from "semantic-ui-react";
import BubbleTitle from "./BubbleTitle.jsx";
import CloseBtn from "./CloseBtn";

export default function ButtonsNav() {
    const changePage = useStore.getState().changePage;
    const modalContent = useStore((state) => state.modalContent);
    const about = useStore((state) => state.about);

    const margin = 50;

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

    const btmLeft = {
        position: "absolute",
        left: 0,
        bottom: 0,
        marginBottom: margin + "px",
        marginLeft: margin * 2 + "px",
        pointerEvents: "auto",
    };

    const botmRight = {
        position: "absolute",
        right: 0,
        bottom: 0,
        marginBottom: margin + "px",
        marginRight: margin * 2 + "px",
        pointerEvents: "auto",
    };

    const primary = {};
    //     backgroundColor: "black",
    //     color: "white",
    //     border: "solid 1px white",
    // };

    return (
        <>
            <div style={contStyle}>
                <BubbleTitle />
                <CloseBtn />
                {!about && modalContent > 0 ? (
                    <Button
                        circular
                        icon="arrow left"
                        inverted
                        basic
                        style={Object.assign({}, btmLeft, primary)}
                        onClick={() => changePage(-1)}
                    />
                ) : (
                    <></>
                )}
                {!about && modalContent < 2 ? (
                    <Button
                        circular
                        icon="arrow right"
                        inverted
                        basic
                        style={Object.assign({}, botmRight, primary)}
                        onClick={() => changePage(1)}
                    />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
