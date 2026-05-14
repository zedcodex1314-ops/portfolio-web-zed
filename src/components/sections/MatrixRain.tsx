"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs = "01";
    const fontSize = 14;
    let width = 0;
    let height = 0;
    let drops: number[] = [];

    const resize = () => {
      width = (canvas.width = canvas.offsetWidth);
      height = (canvas.height = canvas.offsetHeight);
      const cols = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: cols }, () => Math.random() * height);
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(10,10,15,0.18)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.fillStyle = "rgba(0,212,255,0.55)";

      for (let i = 0; i < drops.length; i++) {
        const text = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        drops[i] = y > height && Math.random() > 0.965 ? 0 : drops[i] + 0.6;
      }

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-40"
    />
  );
}
