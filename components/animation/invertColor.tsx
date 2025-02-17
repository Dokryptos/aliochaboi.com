"use client";

export function invertColor(hex: string): string {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return `rgb(${r}, ${g}, ${b})`;
}

export function rgbToHex(rgb: string): string {
  const result = rgb.match(/\d+/g);
  if (!result) return "#000000";
  const [r, g, b] = result.map(Number);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
