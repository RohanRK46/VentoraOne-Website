import React, { useRef, useEffect } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height, nodes, gradient;
    let NODE_COUNT, MAX_DIST, MAX_DIST_SQ;
    let animFrameId;
    let resizeTimer;

    const SCALE = 0.7;
    const lockedHeight = window.innerHeight;

    function getNodeCount(w) {
      if (w < 480) return 22;
      if (w < 768) return 35;
      return 55;
    }

    function getMaxDist(w) {
      if (w < 480) return 100;
      if (w < 768) return 120;
      return 140;
    }

    function resize() {
      width = canvas.width = window.innerWidth * SCALE;
      height = canvas.height = lockedHeight * SCALE;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = lockedHeight + "px";

      NODE_COUNT = getNodeCount(window.innerWidth);
      MAX_DIST = getMaxDist(window.innerWidth);
      MAX_DIST_SQ = MAX_DIST * MAX_DIST;

      gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.75,
        0,
        width / 2,
        height * 0.75,
        width
      );
      gradient.addColorStop(0, "#00041e");
      gradient.addColorStop(1, "#031329");
    }

    function createNodes() {
      nodes = new Array(NODE_COUNT);
      for (let i = 0; i < NODE_COUNT; i++) {
        const depth = Math.random();
        nodes[i] = {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          depth,
          blinkOffset: Math.random() * Math.PI * 2
        };
      }
    }

    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createNodes();
      }, 200);
    }

    function drawBackground() {
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function connectNodes(time) {
      const len = nodes.length;
      for (let i = 0; i < len; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < len; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > MAX_DIST_SQ) continue;
          const heightFactor = (n1.y + n2.y) / (2 * height);
          const depthAvg = (n1.depth + n2.depth) * 0.5;
          const baseAlpha = (1 - distSq / MAX_DIST_SQ) * depthAvg * heightFactor;
          if (baseAlpha < 0.03) continue;
          const wave = 0.7 + 0.3 * Math.sin(time * 0.004 + distSq * 0.01);
          ctx.strokeStyle = `rgba(0,220,255,${baseAlpha * wave * 1.4})`;
          ctx.lineWidth = depthAvg * heightFactor * 2;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);
      drawBackground();
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx * node.depth;
        node.y += node.vy * node.depth;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        const blink = 0.8 + 0.2 * Math.sin(time * 0.001 + node.blinkOffset);
        const size = 1.2 + node.depth * 2.2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${blink})`;
        ctx.fill();
      }
      connectNodes(time);
      animFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);
    resize();
    createNodes();
    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
}