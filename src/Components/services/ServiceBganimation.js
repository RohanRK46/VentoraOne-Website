import React, { useRef, useEffect } from "react";

export default function ServiceBganimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width, height;
        let nodes = [];

        const NODE_COUNT = 160;

        const mouse = {
            x: null,
            y: null,
            radius: 140,
        };

        function resize() {
            // ✅ FIX: use visible viewport width (not window.innerWidth)
            width = canvas.width = document.documentElement.clientWidth;
            height = canvas.height = window.innerHeight * 1.4;
        }

        resize();
        window.addEventListener("resize", resize);

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", () => {
            mouse.x = null;
            mouse.y = null;
        });

        function createNodes() {
            nodes = [];
            for (let i = 0; i < NODE_COUNT; i++) {
                const depth = Math.random();
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseVx: (Math.random() - 0.5) * 0.5,
                    baseVy: (Math.random() - 0.5) * 0.5,
                    vx: 0,
                    vy: 0,
                    depth,
                    blinkOffset: Math.random() * Math.PI * 2,
                });
            }
        }

        createNodes();

        function drawBackground() {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "#f7fbff");
            gradient.addColorStop(1, "#eaf3ff");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        function connectNodes(time) {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const depthAvg =
                            (nodes[i].depth + nodes[j].depth) / 2;

                        const fade =
                            0.6 + 0.4 * Math.sin(time * 0.002 + dist);

                        const alpha =
                            (1 - dist / 120) * depthAvg * fade;

                        if (alpha > 0.04) {
                            ctx.strokeStyle = `rgba(0, 0, 128, ${alpha})`;
                            ctx.lineWidth = depthAvg * 2.2;

                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        function animate(time) {
            ctx.clearRect(0, 0, width, height);
            drawBackground();

            const drift = Math.sin(time * 0.0003) * 20;

            nodes.forEach((node) => {

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = node.x - mouse.x;
                    const dy = node.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);

                        node.vx += Math.cos(angle) * force * 0.45;
                        node.vy += Math.sin(angle) * force * 0.45;
                    }
                }

                node.vx += node.baseVx * node.depth * 0.05;
                node.vy += node.baseVy * node.depth * 0.05;

                node.vx *= 0.92;
                node.vy *= 0.92;

                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                const breathe =
                    0.9 + 0.1 * Math.sin(time * 0.002 + node.blinkOffset);

                const size = (2 + node.depth * 3.5) * breathe;

                ctx.shadowBlur = node.depth * 12;
                ctx.shadowColor = "rgba(0, 150, 255, 0.6)";

                ctx.beginPath();
                ctx.arc(node.x + drift * 0.1, node.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 150, 255, 0.85)`;
                ctx.fill();

                ctx.shadowBlur = 0;
            });

            connectNodes(time);
            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                left: 0,
                width: "100%",
                minHeight: "170vh",
                zIndex: -1,
                pointerEvents: "none",
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
        />
    );
}