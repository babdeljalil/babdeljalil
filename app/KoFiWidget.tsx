/* eslint-disable @typescript-eslint/no-explicit-any */
// app/KoFiWidget.tsx
"use client";

import { useEffect } from "react";

export default function KoFiWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      const kofiWidgetOverlay = (window as any).kofiWidgetOverlay;
      if (kofiWidgetOverlay) {
        kofiWidgetOverlay.draw("babdeljalil", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support me",
          "floating-chat.donateButton.background-color": "#323842",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
