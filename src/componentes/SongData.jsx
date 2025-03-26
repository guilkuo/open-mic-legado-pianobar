// componentes/SongData.jsx
// Aquí ponemos el array de canciones y la función de deduplicado, 
// y el testSongCatalog (opcional) si deseas.
import { useState, useMemo } from "react";
export const rawSongs = [
  { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
  { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional", "#Canción de cancha"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
  { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
  { title: "A Donde Vamos", artist: "Coti", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/coti/a-donde-vamos/" },
  { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
  { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional", "#Canción de cancha"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
  // ... si tienes más, ponlos aquí ...
];

export function deduplicateSongs(arr) {
  const seen = new Set();
  const result = [];
  for (const s of arr) {
    const key = `${s.title.toLowerCase()}__${s.artist.toLowerCase()}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(s);
    }
  }
  return result;
}

// (Opcional) Si deseas tener testSongCatalog aquí, en lugar de SongCatalog.jsx
// lo exportas:
export function testSongCatalog() {
  if (!Array.isArray(rawSongs)) {
    throw new Error("rawSongs is not an array");
  }
  const titles = rawSongs.map((s) => s.title);
  if (!titles.includes("A Donde Vamos")) {
    throw new Error("Missing 'A Donde Vamos'");
  }
  if (!titles.includes("Bohemian Rhapsody")) {
    throw new Error("Missing 'Bohemian Rhapsody'");
  }
  if (!titles.includes("Muchachos")) {
    throw new Error("Missing 'Muchachos'");
  }
  console.log("All tests passed successfully!");
}
