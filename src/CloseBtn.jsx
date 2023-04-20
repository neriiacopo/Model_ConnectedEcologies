import { Button } from "semantic-ui-react";
import { useStore } from "./store/useStore";

export default function CloseBtn() {
    const resetModal = useStore.getState().resetModal;
    const about = useStore((state) => state.about);
    const margin = 50;

    const topRight = {
        position: "fixed",
        right: 0,
        margin: margin + "px",
        pointerEvents: "auto",
        // border: "solid 1px white",
    };

    const primary = {
        backgroundColor: "black",
        color: "white",
        border: "solid 1px white",
    };

    return (
        <Button
            circular
            inverted={!about ? true : false}
            basic
            icon="close"
            style={topRight}
            onClick={() => resetModal()}
        />
    );
}
