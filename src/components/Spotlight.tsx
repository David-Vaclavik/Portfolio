import { useEffect, type PropsWithChildren } from "react";
import "../styles/Spotlight.css";

export function Spotlight({ children }: PropsWithChildren) {
  useEffect(() => {
    // Only run on devices with precise pointing (mouse, trackpad)
    // Skip on touch devices (phones, tablets)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables with mouse position
      document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="spotlight">{children}</div>;
}
