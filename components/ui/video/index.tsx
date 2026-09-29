"use client";
import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type { MuxCSSProperties } from "@mux/mux-player-react";

type VideoProps = {
  playbackId: string;
  className?: string;
};

export default function Video({ playbackId, className }: VideoProps) {
  const [isReady, setIsReady] = useState(false);
  const posterUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`;

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Reste affichee (taille toujours correcte, comme une photo) tant que la video n'est pas reellement prete a jouer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <MuxPlayer
        playbackId={playbackId}
        streamType="on-demand"
        autoPlay
        volume={0.3}
        loop
        poster={posterUrl}
        onCanPlay={() => setIsReady(true)}
        style={
          {
            "--controls": "none",
            "--media-object-fit": "contain",
            "--media-background-color": "transparent",
          } as MuxCSSProperties
        }
        className="w-full h-full"
      />
    </div>
  );
}
