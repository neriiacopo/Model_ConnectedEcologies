import { useStore } from "./store/useStore.jsx";
import { useState, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
import ReactHowler from "react-howler";

export default function Hear() {
    const [playing, setPlay] = useState(false);

    const activeId = useStore.getState().activeId;
    const narrative = useStore.getState().narratives[activeId];
    const icoBtn = useStore((state) => state.texts["0"].button);
    const removeIntro = useStore.getState().removeIntro;

    const language = useStore((state) => state.language);
    const audio = useStore((state) => state.recordings[language][narrative]);

    const fontSize = 20;

    const elStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        fontSize: fontSize + "px",
    };

    const containerStyle = {
        position: "absolute",
        margin: "auto",
    };

    return (
        <>
            <div style={{ containerStyle }}>
                {playing ? (
                    <i
                        onClick={() => {
                            setPlay(!playing);
                            removeIntro();
                        }}
                        className={icoBtn[1]}
                        style={elStyle}
                    />
                ) : (
                    <i
                        onClick={() => {
                            setPlay(!playing);
                            removeIntro();
                        }}
                        className={icoBtn[0]}
                        style={elStyle}
                    />
                )}
            </div>
            <ReactHowler
                src={audio}
                playing={playing}
                onEnd={() => useStore.setState({ modalContent: 1 })}
            />
        </>
    );
}
