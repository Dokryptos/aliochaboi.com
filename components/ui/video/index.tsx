"use client";
import { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type { MuxCSSProperties } from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";

type VideoProps = {
  playbackId: string;
  className?: string;
};

export default function Video({ playbackId, className }: VideoProps) {
  const playerRef = useRef<MuxPlayerElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const posterUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`;

  const togglePlay = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    // Les navigateurs bloquent l'autoplay avec son sans interaction :
    // la video demarre donc muette, et le premier clic active le son.
    if (isMuted) {
      setIsMuted(false);
      if (playerRef.current) playerRef.current.muted = false;
      playerRef.current?.play();
      return;
    }
    if (isPlaying) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }
  };

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
        ref={playerRef}
        playbackId={playbackId}
        streamType="on-demand"
        autoPlay="muted"
        muted={isMuted}
        volume={0.3}
        loop
        poster={posterUrl}
        onCanPlay={() => setIsReady(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={
          {
            "--controls": "none",
            "--media-object-fit": "contain",
            "--media-background-color": "transparent",
          } as MuxCSSProperties
        }
        className="w-full h-full"
      />
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center"
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
            <rect x="5" y="4" width="4" height="16" />
            <rect x="15" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </button>
    </div>
  );
}
