import React, { useRef, useEffect } from "react";
import { createNoise3D } from "simplex-noise";
import { useStore } from "./store/useStore.jsx";

export default function AnimatedGradient({
    colors,
    noiseScale = 0.2,
    canvasResolution = 30,
}) {
    const status = useStore((state) => state.status);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const simplex = new createNoise3D();

        const width = canvas.width;
        const height = canvas.height;
        const colorCount = colors.length;

        let time = 0;
        function animate() {
            if (status == "idle") {
                time += 0.003;
            } else if (status == "loading") {
                time += 0.02;
            }

            ctx.clearRect(0, 0, width, height);

            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const nx = x / width - 0.5;
                    const ny = y / height - 0.5;
                    const noiseValue = simplex(
                        nx * noiseScale,
                        ny * noiseScale,
                        time
                    );
                    const colorIndex = Math.floor(
                        ((noiseValue + 1) / 2) * colorCount
                    );
                    const color1 = colors[colorIndex];
                    const color2 = colors[(colorIndex + 1) % colorCount];
                    const t =
                        (((noiseValue + 1) / 2) % (1 / colorCount)) *
                        colorCount;
                    const r = Math.floor(
                        parseInt(color1.slice(1, 3), 16) * (1 - t) +
                            parseInt(color2.slice(1, 3), 16) * t
                    );
                    const g = Math.floor(
                        parseInt(color1.slice(3, 5), 16) * (1 - t) +
                            parseInt(color2.slice(3, 5), 16) * t
                    );
                    const b = Math.floor(
                        parseInt(color1.slice(5, 7), 16) * (1 - t) +
                            parseInt(color2.slice(5, 7), 16) * t
                    );

                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.fillRect(x, y, 1, 1);
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, [colors, noiseScale, canvasResolution, status]);

    return (
        <canvas
            className="background"
            ref={canvasRef}
            width={canvasResolution}
            height={canvasResolution}
        />
    );
}
