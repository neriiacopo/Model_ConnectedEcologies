import { Button, Grid } from "semantic-ui-react";
import { useRef, useEffect, useState } from "react";
import { useStore } from "./store/useStore.jsx";

export default function See() {
    const prompts = useStore.getState().prompts;
    const activeId = useStore.getState().activeId;
    const [trigger, setTrigger] = useState([0]);
    const icoBtn = useStore((state) => state.texts["1"].button);
    const intro = useStore((state) => state.intro);

    const canvasInRef = useRef(null);
    const canvasOutRef = useRef(null);

    const video = document.createElement("video");
    navigator.mediaDevices
        .getUserMedia({
            audio: false,
            video: { facingMode: "environment" },
        })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
        })
        .catch((error) => {
            console.error(error);
        });

    // useEffect(() => {
    //     const canvasIn = canvasInRef.current;
    //     const canvasOut = canvasOutRef.current;
    //     useStore.setState({ status: "loading" });

    //     canvasIn.width = 360;
    //     canvasIn.height = 480;
    //     canvasOut.width = 360;
    //     canvasOut.height = 480;

    //     const url = "https://neriiacopo-t2i-adapter.hf.space";
    //     canvasIn
    //         .getContext("2d")
    //         .drawImage(video, 0, 0, canvasIn.width, canvasIn.height);

    //     const b64img = canvasIn.toDataURL("image/png");
    //     generate(canvasOut, url, b64img, prompts[activeId]);
    // }, [trigger]);

    function captureImg() {
        const canvasIn = canvasInRef.current;
        const canvasOut = canvasOutRef.current;
        useStore.setState({ status: "loading", intro: false });

        canvasIn.width = 360;
        canvasIn.height = 480;
        canvasOut.width = 360;
        canvasOut.height = 480;

        const url = "https://neriiacopo-t2i-adapter.hf.space";
        canvasIn
            .getContext("2d")
            .drawImage(video, 0, 0, canvasIn.width, canvasIn.height);

        const b64img = canvasIn.toDataURL("image/png");
        generate(canvasOut, url, b64img, prompts[activeId]);
        // setTrigger(trigger + 1);
    }

    const elStyleCentered = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "20px",
    };
    const elStyleBottom = {
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 0) scale(0.5)",
        fontSize: "20px",
        border: "solid 2px white",
        borderRadius: "100%",
    };

    const containerStyle = {
        margin: "auto",
        width: "100%",
        heigth: "100%",
    };

    return (
        <>
            <canvas
                id="input"
                ref={canvasInRef}
                width={"100%"}
                height={"100%"}
                style={{
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    display: "none",
                }}
            />

            <canvas
                id="output"
                ref={canvasOutRef}
                width={"100%"}
                height={"100%"}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                }}
            />

            <div style={{ containerStyle }}>
                <i
                    onClick={() => captureImg()}
                    className={icoBtn}
                    style={intro ? elStyleCentered : elStyleBottom}
                />
            </div>
        </>
    );
}

async function generate(canvasOut, url, b64img, prompt) {
    try {
        const response = await fetch(url + "/run/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    "Image",
                    b64img,
                    ,
                    1,
                    prompt,
                    "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
                    7.5,
                    1,
                    Math.floor(Math.random() * 100000),
                    20,
                    512,
                    1,
                    "v1-5-pruned-emaonly.ckpt",
                ],
            }),
        });

        const result = await response.json();
        const outb64 = result.data[1];

        const img = new Image();

        // Set the src attribute and wait for the image to load
        img.onload = function () {
            canvasOut
                .getContext("2d")
                .drawImage(img, 0, 0, canvasOut.width, canvasOut.height);

            useStore.setState({ status: "frozen" });
        };
        img.src = "data:image/png;base64," + outb64;
    } catch (error) {
        console.error("Error:", error);
    }
}
