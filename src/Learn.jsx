import { useStore } from "./store/useStore.jsx";

export default function Learn() {
    const icoBtn = useStore((state) => state.texts["2"].button);
    const links = useStore((state) => state.texts["2"].links);
    const activeId = useStore((state) => state.activeId);
    useStore.setState({ intro: true });

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
                <i
                    onClick={() => window.open(links[activeId])}
                    className={icoBtn}
                    style={elStyle}
                />
            </div>
        </>
    );
}
