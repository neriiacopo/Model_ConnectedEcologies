import { useStore } from "./store/useStore.jsx";
import { useEffect, useState, useLayoutEffect, useMemo } from "react";
import { Modal, Button } from "semantic-ui-react";
import Hear from "./Hear.jsx";
import See from "./See.jsx";
import Learn from "./Learn.jsx";
import AnimatedGradient from "./AnimatedGradient.jsx";
import ButtonsNav from "./ButtonsNav.jsx";

export default function Card() {
    const activeId = useStore((state) => state.activeId);
    const narratives = useStore.getState().narratives;
    const palettes = useStore.getState().palettes;
    const modalContent = useStore((state) => state.modalContent);
    const resetModal = useStore.getState().resetModal;
    const status = useStore((state) => state.status);

    const radCircle = 100;

    let modalCircle = {
        borderRadius: "100%",
        // width: radCircle + "px",
        // height: radCircle + "px",
        width: window.innerWidth * 0.3,
        height: window.innerWidth * 0.3,
        position: "relative",
        top: "50%",
        left: "50%",
        margin: 0,
        padding: 0,
        transform: "translate(-50%, -50%)",
    };

    let modalRect = {
        borderRadius: "20px",
        width: "100%",
        height: "100%",
        position: "relative",
        top: "50%",
        left: "50%",
        margin: 0,
        transform: "translate(-50%, -50%)",
    };

    return (
        <>
            <Modal
                onClose={() => resetModal()}
                open={Boolean(activeId)}
                dimmer={"blurring"}
            >
                <div
                    style={
                        status != "idle" && modalContent == 1
                            ? modalRect
                            : modalCircle
                    }
                    id="bubble"
                >
                    <AnimatedGradient colors={palettes[narratives[activeId]]} />

                    {modalContent == 0 ? <Hear /> : <></>}
                    {modalContent == 1 ? <See /> : <></>}
                    {modalContent == 2 ? <Learn /> : <></>}
                </div>
                <ButtonsNav />
            </Modal>
        </>
    );
}
