import { useState, useEffect } from "react";
/* import { songs } from "./componentes/songsData"; // <-- Importamos el array
 */


// Local Storage key to store tag click counts
const TAG_CLICKS_STORAGE_KEY = "tagClicks";

// Helper: loadTagClicks from localStorage
function loadTagClicks() {
  try {
    const stored = localStorage.getItem(TAG_CLICKS_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    return {};
  } catch {
    return {};
  }
}

// Helper: saveTagClicks to localStorage
function saveTagClicks(tagClicks) {
  localStorage.setItem(TAG_CLICKS_STORAGE_KEY, JSON.stringify(tagClicks));
}

// Example songs (replace with your full set)
const songs = [
  // Código para añadir al array songs (sin duplicados):

///////////////////////////////////////////////////////////
// Fito Páez
///////////////////////////////////////////////////////////
{
  title: "Fue Amor",
  artist: "Fito Páez",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/fito-paez/fue-amor/"
  },
  {
  title: "Y Dale Alegria A Mi Corazón",
  artist: "Fito Páez",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/fito-paez/72979/"
  },
  {
  title: "Un Vestido y un Amor",
  artist: "Fito Páez",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/fito-paez/un-vestido-y-un-amor/"
  },
  {
  title: "Pétalo de Sal",
  artist: "Fito Páez",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/fito-paez/65817/"
  },
  {
  title: "A Rodar Mi Vida",
  artist: "Fito Páez",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/fito-paez/a-rodar-mi-vida/"
  },
  
  ///////////////////////////////////////////////////////////
  // Luis Alberto Spinetta
  ///////////////////////////////////////////////////////////
  {
  title: "Seguir Viviendo Sin Tu Amor",
  artist: "Luis Alberto Spinetta",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/110304/"
  },
  {
  title: "Barro Tal Vez",
  artist: "Luis Alberto Spinetta",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/96998/"
  },
  {
  title: "Muchacha Ojos de Papel",
  artist: "Luis Alberto Spinetta",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/muchacha-ojos-de-papel/"
  },
  {
  title: "Bajan",
  artist: "Luis Alberto Spinetta",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/67417/"
  },
  
  ///////////////////////////////////////////////////////////
  // Intoxicados / Viejas Locas
  ///////////////////////////////////////////////////////////
  {
  title: "Fuego",
  artist: "Intoxicados",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/intoxicados/705253/"
  },
  {
  title: "Me Gustas Mucho",
  artist: "Viejas Locas",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/viejas-locas/158416/"
  },
  {
  title: "Todo Sigue Igual",
  artist: "Viejas Locas",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/viejas-locas/158419/"
  },
  {
  title: "Homero",
  artist: "Viejas Locas",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/viejas-locas/158412/"
  },
  {
  title: "Nunca Quise",
  artist: "Intoxicados",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/intoxicados/229126/"
  },
  
  ///////////////////////////////////////////////////////////
  // Gilda (ejemplo: "No Me Arrepiento..." ya lo tienes, "Se me ha perdido un corazón" igual)
  ///////////////////////////////////////////////////////////
  {
  title: "Paisaje",
  artist: "Gilda",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gilda/520874/"
  },
  {
  title: "Corazón Valiente",
  artist: "Gilda",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gilda/1245765/"
  },
  
  ///////////////////////////////////////////////////////////
  // Gustavo Cerati (Persiana Americana está con Soda, ojo duplicado, omito)
  ///////////////////////////////////////////////////////////
  {
  title: "Crimen",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/79864/"
  },
  {
  title: "Adios",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/adios/"
  },
  {
  title: "Cactus",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/1808018/"
  },
  {
  title: "Zona de Promesas",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/1479313/"
  },
  {
  title: "Lago en el Cielo",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/lago-en-el-cielo/"
  },
  {
  title: "Deja Vu",
  artist: "Gustavo Cerati",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/gustavo-cerati/1748989/"
  },
  
  ///////////////////////////////////////////////////////////
  // Charly García (Seminare es de Serú, Ojos de VideoTape ya lo tuvieras? Si no, se pone)
  ///////////////////////////////////////////////////////////
  {
  title: "Chipi Chipi",
  artist: "Charly García",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/charly-garcia/chipi-chipi/"
  },
  {
  title: "Tu Amor",
  artist: "Charly García",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/charly-garcia/tu-amor/"
  },
  {
  title: "Me Siento Mucho Mejor",
  artist: "Charly García",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/charly-garcia/1154877/"
  },
  {
  title: "Ojos de Video Tape",
  artist: "Charly García",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/charly-garcia/939578/"
  },
  
  ///////////////////////////////////////////////////////////
  // Estelares
  ///////////////////////////////////////////////////////////
  {
  title: "Ella Dijo",
  artist: "Estelares",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/estelares/ella-dijo/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Pericos
  ///////////////////////////////////////////////////////////
  {
  title: "Pupilas Lejanas",
  artist: "Los Pericos",
  tags: ["#Reggae", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-pericos/68968/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Fabulosos Cadillacs (Matador ya, agrega 'Carnaval Toda La Vida')
  ///////////////////////////////////////////////////////////
  {
  title: "Carnaval Toda La Vida",
  artist: "Los Fabulosos Cadillacs",
  tags: ["#Ska", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/68999/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Auténticos Decadentes
  ///////////////////////////////////////////////////////////
  {
  title: "Corazón",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/447662/"
  },
  {
  title: "La Guitarra",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/78959/"
  },
  {
  title: "Veni Raquel",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/veniraquel/"
  },
  {
  title: "Como Me Voy a Olvidar",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/como-me-voy-a-olvidar/"
  },
  {
  title: "La Prima Lejana",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/la-prima-lejana/"
  },
  
  ///////////////////////////////////////////////////////////
  // Diego Torres
  ///////////////////////////////////////////////////////////
  {
  title: "Todo Pasa",
  artist: "Diego Torres",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/diego-torres/todo-pasa/"
  },
  {
  title: "No Lo Soñé",
  artist: "Diego Torres",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/diego-torres/no-lo-sone/"
  },
  {
  title: "Alguien la Vio Partir",
  artist: "Diego Torres",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/diego-torres/alguien-la-vio-partir/"
  },
  {
  title: "Usted",
  artist: "Diego Torres",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/diego-torres/usted/"
  },
  {
  title: "Penélope",
  artist: "Diego Torres",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/diego-torres/penelope/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Gatos
  ///////////////////////////////////////////////////////////
  {
  title: "La Balsa",
  artist: "Los Gatos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-gatos/595377/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Abuelos de la Nada
  ///////////////////////////////////////////////////////////
  {
  title: "Mil Horas",
  artist: "Los Abuelos de la Nada",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-abuelos-de-la-nada/68627/"
  },
  
  ///////////////////////////////////////////////////////////
  // La Mosca
  ///////////////////////////////////////////////////////////
  {
  title: "Todos Tenemos un Amor",
  artist: "La Mosca",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/la-mosca/todos-tenemos-un-amor/"
  },
  
  ///////////////////////////////////////////////////////////
  // Turf
  ///////////////////////////////////////////////////////////
  {
  title: "Loco Un Poco",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/loco-un-poco/"
  },
  {
  title: "Casanova",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/casanova/"
  },
  {
  title: "Pasos al Costado",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/pasos-al-costado/"
  },
  {
  title: "Magia Blanca",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/magia-blanca/"
  },
  {
  title: "Yo No Me Quiero Casar",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/yo-no-me-quiero-casar/"
  },
  {
  title: "Cuatro Personalidades",
  artist: "Turf",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/turf/cuatro-personalidades/"
  },
  
  ///////////////////////////////////////////////////////////
  // Tan Biónica
  ///////////////////////////////////////////////////////////
  {
  title: "La Melodía de Dios",
  artist: "Tan Biónica",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/tan-bionica/la-melodia-de-dios/"
  },
  
  ///////////////////////////////////////////////////////////
  // Miranda!
  ///////////////////////////////////////////////////////////
  {
  title: "Don",
  artist: "Miranda!",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/miranda/don/"
  },
  {
  title: "Yo Te Diré",
  artist: "Miranda!",
  tags: ["#Pop", "#Nacional"],
  lyricsUrl: "https://www.letras.com/miranda/yo-te-dire/"
  },
  
  ///////////////////////////////////////////////////////////
  // Babasónicos
  ///////////////////////////////////////////////////////////
  {
  title: "Como Eran Las Cosas",
  artist: "Babasónicos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/babasonicos/66263/"
  },
  {
  title: "Irresponsables",
  artist: "Babasónicos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/babasonicos/77680/"
  },
  {
  title: "El Loco",
  artist: "Babasónicos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/babasonicos/1213650/"
  },
  {
  title: "Yegua",
  artist: "Babasónicos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/babasonicos/979926/"
  },
  {
  title: "Putita",
  artist: "Babasónicos",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/babasonicos/76765/"
  },
  
  ///////////////////////////////////////////////////////////
  // WOS
  ///////////////////////////////////////////////////////////
  {
  title: "Niño Gordo Flaco",
  artist: "WOS",
  tags: ["#Rap", "#Nacional"],
  lyricsUrl: "https://www.letras.com/wos/nino-gordo-flaco/"
  },
  
  ///////////////////////////////////////////////////////////
  // Nestor En Bloque
  ///////////////////////////////////////////////////////////
  {
  title: "Una Calle Nos Separa",
  artist: "Nestor En Bloque",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/nestor-en-bloque/1559357/"
  },
  
  ///////////////////////////////////////////////////////////
  // Virus
  ///////////////////////////////////////////////////////////
  {
  title: "Luna de Miel en la Mano",
  artist: "Virus",
  tags: ["#Rock", "#Nacional"],
  lyricsUrl: "https://www.letras.com/virus/513875/"
  },
  
  ///////////////////////////////////////////////////////////
  // Mario Luis
  ///////////////////////////////////////////////////////////
  {
  title: "Voy a Olvidarme de Mi",
  artist: "Mario Luis",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/mario-luis/voy-a-olvidarme-de-mi/"
  },
  {
  title: "Tu Historia Entre Mis Dedos",
  artist: "Mario Luis",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/mario-luis/tu-historia-entre-mis-dedos/"
  },
  
  ///////////////////////////////////////////////////////////
  // Leo Mattioli
  ///////////////////////////////////////////////////////////
  {
  title: "Tramposa y Mentirosa",
  artist: "Leo Mattioli",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/leo-mattioli/tramposa-y-mentirosa/"
  },
  
  ///////////////////////////////////////////////////////////
  // Los Auténticos Decadentes (ROMÁNTICOS: Yegua/Putita => Babasonicos, omit duplicates)
  ///////////////////////////////////////////////////////////
  {
  title: "Corazón",
  artist: "Los Auténticos Decadentes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/447662/"
  },
  // etc... (Ya incluidos arriba con la misma info).
  
  ///////////////////////////////////////////////////////////
  // Pop Internacional
  ///////////////////////////////////////////////////////////
  {
  title: "How Deep Is Your Love",
  artist: "Bee Gees",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/bee-gees/22153/"
  },
  {
  title: "Killing Me Softly",
  artist: "Roberta Flack",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/roberta-flack/68357/"
  },
  {
  title: "I Will Survive",
  artist: "Gloria Gaynor",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/gloria-gaynor/22373/"
  },
  {
  title: "Just the Way You Are",
  artist: "Bruno Mars",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/bruno-mars/just-the-way-you-are/"
  },
  {
  title: "Your Song",
  artist: "Elton John",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/elton-john/21057/"
  },
  {
  title: "Piano Man",
  artist: "Billy Joel",
  tags: ["#Pop", "#Internacional"],
  lyricsUrl: "https://www.letras.com/billy-joel/9933/"
  },
  {
  title: "Hotel California",
  artist: "Eagles",
  tags: ["#Rock", "#Internacional"],
  lyricsUrl: "https://www.letras.com/eagles/6809/"
  },
  
  ///////////////////////////////////////////////////////////
  // Cumbias
  ///////////////////////////////////////////////////////////
  {
  title: "Yo Tomo Licor",
  artist: "Banda X",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/banda-x/yo-tomo-licor/" // Placeholder, no link oficial
  },
  {
  title: "Nunca Me Faltes",
  artist: "Antonio Ríos",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/antonio-rios/248173/"
  },
  {
  title: "La Ventanita",
  artist: "Grupo Sombras",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/grupo-sombras/248175/"
  },
  {
  title: "Iluminará",
  artist: "Ráfaga",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/rafaga/1979402/"
  },
  {
  title: "La Cumbia",
  artist: "Los Del Rio",
  tags: ["#Cumbia", "#Internacional"],
  lyricsUrl: "https://www.letras.com/los-del-rio/la-cumbia/"
  },
  {
  title: "Pibe Cantina",
  artist: "La Liga",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/la-liga/pibe-cantina/"
  },
  {
  title: "Duraznito",
  artist: "Los Totora",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/los-totora/duraznito/"
  },
  {
  title: "No Te Creas Tan Importante",
  artist: "Damas Gratis",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/damas-gratis/no-te-creas-tan-importante/"
  },
  {
  title: "El Humo de Mi Fasito",
  artist: "Yerba Brava",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/yerba-brava/1952915/"
  },
  {
  title: "Yo Soy Tu Maestro",
  artist: "Néstor en Bloque",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/nestor-en-bloque/yo-soy-tu-maestro/" // Placeholder link
  },
  {
  title: "La Resaca",
  artist: "Aldo y Los Pasteles Verdes",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/aldo-y-los-pasteles-verdes/la-resaca/" // Placeholder
  },
  {
  title: "Bailan Rochas y Chetas",
  artist: "Nene Malo",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/nene-malo/bailan-rochas-y-chetas/"
  },
  {
  title: "Chetos y Cumbieros",
  artist: "El Dipy",
  tags: ["#Cumbia", "#Nacional"],
  lyricsUrl: "https://www.letras.com/el-dipy/chetos-y-cumbieros/"
  },
  
  ///////////////////////////////////////////////////////////
  // Abel Pintos
  ///////////////////////////////////////////////////////////
  {
  title: "La Llave",
  artist: "Abel Pintos",
  tags: ["#Folklore", "#Nacional"],
  lyricsUrl: "https://www.letras.com/abel-pintos/1174158/"
  },
  // ... (Same content as your doc)
  { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
  { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional", "#Canción de cancha"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
  // ...
  { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
  { title: "A Donde Vamos", artist: "Coti", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/coti/a-donde-vamos/" },
  { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
  { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional", "#Canción de cancha"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
  // etc...
  { title: "Imagine", artist: "John Lennon", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/john-lennon/imagine/" },
  { title: "Livin' on a Prayer", artist: "Bon Jovi", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/bon-jovi/livin-on-a-prayer/" },
  { title: "Tengo", artist: "Sandro", tags: ["#Rock", "#Nacional", "#1960s"], lyricsUrl: "https://www.letras.com/sandro/tengo/" },
  { title: "Mariposa Tecknicolor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/mariposa-tecknicolor/" },
  { title: "Wonderwall", artist: "Oasis", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/oasis/wonderwall/" },
  { title: "La Macarena", artist: "Los del Río", tags: ["#Pop", "#Internacional", "#1990s", "#Cortina de televisión"], lyricsUrl: "https://www.letras.com/los-del-rio/la-macarena/" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", tags: ["#Grunge", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/nirvana/smells-like-teen-spirit/" },
  { title: "La Copa de la Vida", artist: "Ricky Martin", tags: ["#Pop", "#Internacional", "#1990s", "#Canción de cancha"], lyricsUrl: "https://www.letras.com/ricky-martin/la-copa-de-la-vida/" },
  { title: "Thriller", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/thriller/" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/guns-n-roses/sweet-child-o-mine/" },
  { title: "Persiana Americana", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/persiana-americana/" },
  { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
  { title: "Garota de Ipanema", artist: "Tom Jobim & Vinicius de Moraes", tags: ["#BossaNova", "#Brasil", "#1960s"], lyricsUrl: "https://www.letras.com/antonio-carlos-jobim/20712/" },
  { title: "Ai Se Eu Te Pego", artist: "Michel Teló", tags: ["#Pop", "#Brasil", "#2010s"], lyricsUrl: "https://www.letras.com/michel-telo/ai-se-eu-te-pego/" },
  { title: "Mas que Nada", artist: "Jorge Ben Jor", tags: ["#Samba", "#Brasil", "#1960s"], lyricsUrl: "https://www.letras.com/jorge-ben-jor/64941/" },
  { title: "Aquarela do Brasil", artist: "Ary Barroso", tags: ["#MPB", "#Brasil", "#1930s"], lyricsUrl: "https://www.letras.com/ary-barroso/66523/" },
  { title: "La Lambada", artist: "Kaoma", tags: ["#Lambada", "#Brasil", "#1980s"], lyricsUrl: "https://www.letras.com/kaoma/lambada/" },

  // Nuevas (30 canciones)
  { title: "En la Ciudad de la Furia", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/en-la-ciudad-de-la-furia/" },
  { title: "El Matador", artist: "Los Fabulosos Cadillacs", tags: ["#Ska", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/68630/" },
  { title: "Siguiendo la Luna", artist: "Los Fabulosos Cadillacs", tags: ["#Ska", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/siguiendo-la-luna/" },
  { title: "Costumbres Argentinas", artist: "Los Abuelos de la Nada", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/los-abuelos-de-la-nada/185504/" },
  { title: "La Bestia Pop", artist: "Patricio Rey y sus Redonditos de Ricota", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/patricio-rey-y-sus-redonditos-de-ricota/446903/" },
  { title: "Ji Ji Ji", artist: "Patricio Rey y sus Redonditos de Ricota", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/patricio-rey-y-sus-redonditos-de-ricota/446886/" },
  { title: "Seminare", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/seminare/" },
  { title: "Rasguña las Piedras", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/443961/" },
  { title: "Rezo por Vos", artist: "Charly García & Luis Alberto Spinetta", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/536332/" },
  { title: "Imágenes Paganas", artist: "Virus", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/virus/513869/" },
  { title: "Mi Enfermedad", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/448628/" },
  { title: "Lamento Boliviano", artist: "Los Enanitos Verdes", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-enanitos-verdes/lamento-boliviano/" },
  { title: "La Guitarra", artist: "Los Auténticos Decadentes", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/78959/" },
  { title: "Tatuada", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/tatuada/" },
  { title: "Se Me Ha Perdido un Corazón", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/520711/" },
  { title: "No Me Arrepiento de Este Amor", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/645063/" },
  { title: "Todo Cambia", artist: "Mercedes Sosa", tags: ["#Folklore", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/mercedes-sosa/196743/" },
  { title: "Zamba para Olvidar", artist: "Mercedes Sosa", tags: ["#Folklore", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/mercedes-sosa/357906/" },
  { title: "Dulce Condena", artist: "Los Rodriguez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-rodriguez/75906/" },
  { title: "Sin Documentos", artist: "Los Rodriguez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-rodriguez/75907/" },
  { title: "Alma de Diamante", artist: "Spinetta Jade", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/spinetta-jade/413368/" },
  { title: "Malo", artist: "Bebe", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/bebe/malo/" },
  { title: "Latinoamérica", artist: "Calle 13", tags: ["#Reggaeton", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/calle-13/latinoamerica/" },
  { title: "Mi Gente", artist: "Héctor Lavoe", tags: ["#Salsa", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/hector-lavoe/mi-gente/" },
  { title: "Despacito", artist: "Luis Fonsi", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/luis-fonsi/despacito-feat-daddy-yankee/" },
  { title: "Zapata se Queda", artist: "Lila Downs", tags: ["#Folklore", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/lila-downs/zapata-se-queda/" },
  { title: "La Bicicleta", artist: "Carlos Vives & Shakira", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/carlos-vives/la-bicicleta/" },
  { title: "Felices los 4", artist: "Maluma", tags: ["#Reggaeton", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/maluma/felices-los-4/" },
  { title: "BZRP Music Sessions #53", artist: "Shakira & Bizarrap", tags: ["#Pop", "#Internacional", "#2020s"], lyricsUrl: "https://www.letras.com/bizarrap/bzrp-music-sessions-vol-53-shakira/" },
  { title: "Baile Inolvidable", artist: "Bad Bunny", tags: ["#Reggaeton", "#Internacional", "#2020s"], lyricsUrl: "https://www.letras.com/bad-bunny/baile-inolvidable/" },

  // Additional songs based on user request
  // 3 more Oasis (we have 1: Wonderwall) => add 2 more to total 3
  { title: "Don't Look Back in Anger", artist: "Oasis", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/oasis/dont-look-back-in-anger/" },
  { title: "Champagne Supernova", artist: "Oasis", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/oasis/champagne-supernova/" },

  // 2 Aerosmith
  { title: "I Don't Want to Miss a Thing", artist: "Aerosmith", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/aerosmith/i-dont-want-to-miss-a-thing/" },
  { title: "Crazy", artist: "Aerosmith", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/aerosmith/crazy/" },

  // 2 Guns N' Roses (we have 1: Sweet Child O' Mine) => add 1 more to total 2
  { title: "November Rain", artist: "Guns N' Roses", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/guns-n-roses/60157/" },

  // 2 Michael Jackson => already have Thriller & Billie Jean

  // 4 Luis Miguel
  { title: "La Incondicional", artist: "Luis Miguel", tags: ["#Pop", "#Mexicano", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/la-incondicional/" },
  { title: "Ahora Te Puedes Marchar", artist: "Luis Miguel", tags: ["#Pop", "#Mexicano", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/ahora-te-puedes-marchar/" },
  { title: "Culpable o No", artist: "Luis Miguel", tags: ["#Pop", "#Mexicano", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/14032/" },
  { title: "Cuando Calienta el Sol", artist: "Luis Miguel", tags: ["#Pop", "#Mexicano", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/cuando-calienta-el-sol/" },

  // 3 Fito Paez => we have 1: Mariposa Tecknicolor => add 2 more
  { title: "El Amor Después del Amor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/49588/" },
  { title: "11 y 6", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/fito-paez/50472/" },

  // 4 Fabiana Cantilo => we have 1: Mi Enfermedad => add 3 more
  { title: "Mary Poppins y el Deshollinador", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/mary-poppins-y-el-deshollinador/" },
  { title: "Nada Es Para Siempre", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/713659/" },
  { title: "Una Tregua", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/1055251/" },

  // 4 Shakira => we have 2: BZRP #53, La Bicicleta => add 2 more
  { title: "Hips Don't Lie", artist: "Shakira", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/shakira/328085/" },
  { title: "Ojos Así", artist: "Shakira", tags: ["#Pop", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/shakira/72536/" },

  // 4 boleros
  { title: "Bésame Mucho", artist: "Consuelo Velázquez", tags: ["#Bolero", "#Internacional", "#1940s"], lyricsUrl: "https://www.letras.com/consuelo-velazquez/besame-mucho/" },
  { title: "Sabor a Mí", artist: "Álvaro Carrillo", tags: ["#Bolero", "#Internacional", "#1950s"], lyricsUrl: "https://www.letras.com/alvaro-carrillo/sabor-a-mi/" },
  { title: "Contigo Aprendí", artist: "Armando Manzanero", tags: ["#Bolero", "#Internacional", "#1960s"], lyricsUrl: "https://www.letras.com/armando-manzanero/725706/" },
  { title: "Solamente una Vez", artist: "Agustín Lara", tags: ["#Bolero", "#Internacional", "#1940s"], lyricsUrl: "https://www.letras.com/agustin-lara/solamente-una-vez/" },

  // 4 Soda Stereo => we have 2: Persiana Americana, En la Ciudad de la Furia => add 2 more
  { title: "De Música Ligera", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/soda-stereo/de-musica-ligera/" },
  { title: "Tratame Suavemente", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/443863/" },

  // 4 Andrés Calamaro
  { title: "Flaca", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81956/" },
  { title: "Te Quiero Igual", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/465814/" },
  { title: "Paloma", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81957/" },
  { title: "Loco", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81896/" },

  // 4 Gustavo Cerati
  { title: "Crimen", artist: "Gustavo Cerati", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/gustavo-cerati/79864/" },
  { title: "Adiós", artist: "Gustavo Cerati", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/gustavo-cerati/adios/" },
  { title: "Puente", artist: "Gustavo Cerati", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gustavo-cerati/83232/" },
  { title: "Lago en el Cielo", artist: "Gustavo Cerati", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/gustavo-cerati/lago-en-el-cielo/" },

  // 1 Depeche Mode
  { title: "Enjoy the Silence", artist: "Depeche Mode", tags: ["#SynthPop", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/depeche-mode/65416/" },

  // 2 Madonna
  { title: "Like a Virgin", artist: "Madonna", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/madonna/45213/" },
  { title: "Material Girl", artist: "Madonna", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/madonna/80771/" },

  // 3 ABBA
  { title: "Dancing Queen", artist: "ABBA", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/abba/31617/" },
  { title: "Mamma Mia", artist: "ABBA", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/abba/31624/" },
  { title: "Gimme! Gimme! Gimme! (A Man After Midnight)", artist: "ABBA", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/abba/31619/" },

  // 2 Bruno Mars
  { title: "Just the Way You Are", artist: "Bruno Mars", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/bruno-mars/just-the-way-you-are/" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", tags: ["#Funk", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/mark-ronson/uptown-funk-feat-bruno-mars/" },

  // 2 Rihanna
  { title: "Umbrella", artist: "Rihanna ft. Jay-Z", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/rihanna/252462/" },
  { title: "Diamonds", artist: "Rihanna", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/rihanna/2073406/" },

  // valerie
  { title: "Valerie", artist: "Mark Ronson ft. Amy Winehouse", tags: ["#Soul", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/amy-winehouse/1253759/" },

  // back in black
  { title: "Back in Black", artist: "AC/DC", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/ac-dc/45530/" },
  // Agrega estas canciones dentro del array `songs`, sin quitar las que tienes:

// De Fito Páez
{ title: "Fue Amor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/fue-amor/" },
{ title: "Y Dale Alegría a Mi Corazón", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/72979/" },
{ title: "Al Lado del Camino", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/77322/" },
{ title: "A Rodar Mi Vida", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/65962/" },
{ title: "Un Vestido y un Amor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/69242/" },
{ title: "La Rueda Mágica", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/la-rueda-magica/" },
{ title: "Cable a Tierra", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/49769/" },
{ title: "Polaroid de Locura Ordinaria", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/polaroid-de-locura-ordinaria/" },
{ title: "Yo Vengo a Ofrecer Mi Corazón", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/fito-paez/69171/" },
{ title: "Dar es Dar", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/65963/" },

// De Andrés Calamaro
{ title: "Flaca", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81956/" },
{ title: "Para No Olvidar", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/para-no-olvidar/" },
{ title: "Sin Documentos", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-rodriguez/75907/" }, 
{ title: "Tuyo Siempre", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/619269/" },
{ title: "Crímenes Perfectos", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81949/" },
{ title: "Loco", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/81896/" },
{ title: "La Parte de Adelante", artist: "Andrés Calamaro", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/andres-calamaro/546268/" },

// 5 temas de Charly García
{ title: "Demoliendo Hoteles", artist: "Charly García", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/642330/" },
{ title: "Nos Siguen Pegando Abajo", artist: "Charly García", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/1154876/" },
{ title: "Yendo de la Cama al Living", artist: "Charly García", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/77332/" },
{ title: "Canción para mi Muerte", artist: "Charly García", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/charly-garcia/536334/" },
{ title: "Inconsciente Colectivo", artist: "Charly García", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/642355/" },

// 5 temas de Sui Generis
{ title: "Canción Para Mi Muerte", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/444018/" },
{ title: "Mr. Jones (Opletaí)", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/443975/" },
{ title: "Confesiones de Invierno", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/443971/" },
{ title: "Aprendizaje", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/443967/" },
{ title: "Rasguña las Piedras", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/443961/" },

// 6 temas de Serú Girán
{ title: "Autos, Jets, Aviones, Barcos", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/autos-jets-aviones-barcos/" },
{ title: "Eiti Leda", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/eiti-leda/" },
{ title: "Viernes 3 AM", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/viernes-3-am/" },
{ title: "Desarma y Sangra", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/desarma-y-sangra/" },
{ title: "San Francisco y el Lobo", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/san-francisco-y-el-lobo/" },
{ title: "Seminare", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/seminare/" },

// 10 temas representativos de los 80s dentro del rock argentino
// (Ejemplos)
{ title: "Nada Personal", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/71328/" },
{ title: "Tratame Suavemente", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/443863/" },
{ title: "Mañanas Campestres", artist: "GAB", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/gab/ma%C3%B1anas-campestres/" },
{ title: "Cuando Pase El Temblor", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/443865/" },
{ title: "Pronta Entrega", artist: "Virus", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/virus/222337/" },
{ title: "Me Voy Para Siempre", artist: "Miguel Mateos/ZAS", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/miguel-mateos/me-voy-para-siempre/" },
{ title: "Hombres de Hierro", artist: "León Gieco", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/leon-gieco/1080377/" },
{ title: "Tu Amor", artist: "Charly García & Pedro Aznar", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/tu-amor/" },
{ title: "Ayer Nomás", artist: "Los Gatos", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/los-gatos/595362/" },
{ title: "Mil Horas", artist: "Los Abuelos de la Nada", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/los-abuelos-de-la-nada/68627/" },

];

// Extract all tags and artists
const allTags = Array.from(new Set(songs.flatMap((song) => song.tags)));
const allArtists = Array.from(new Set(songs.map((song) => song.artist)));

export default function SongCatalog() {
  // "view" can be "artists" or "songs".
  const [view, setView] = useState("songs");

  // Tag clicks from localStorage
  const [tagClicks, setTagClicks] = useState({});
  // On mount, load localStorage
  useEffect(() => {
    setTagClicks(loadTagClicks());
  }, []);
  // On changes, save
  useEffect(() => {
    saveTagClicks(tagClicks);
  }, [tagClicks]);

  // Track filters
  const [selectedTag, setSelectedTag] = useState(null);

  // Undo feature: keep history of states
  const [history, setHistory] = useState([]);
  const pushHistory = () => {
    // Save current states so we can revert later
    setHistory((h) => [
      ...h,
      {
        view,
        selectedTag,
        globalSearch,
      },
    ]);
  };
  const undo = () => {
    if (history.length > 0) {
      const last = history[history.length - 1];
      setView(last.view);
      setSelectedTag(last.selectedTag);
      setGlobalSearch(last.globalSearch);
      // remove from stack
      setHistory((h) => h.slice(0, -1));
    }
  };

  // Increment tag count
  const incrementTagCount = (tag) => {
    setTagClicks((prev) => {
      const newCount = (prev[tag] || 0) + 1;
      return { ...prev, [tag]: newCount };
    });
  };

  // Toggle a tag => clears search, increments, sets tag.
  const toggleTagFilter = (tag) => {
    pushHistory();
    // Cancel the search
    setGlobalSearch("");
    // increment tag
    incrementTagCount(tag);
    // toggle selected tag
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  // Sort tags by click count desc
  const sortedTags = [...allTags].sort((a, b) => {
    const clicksA = tagClicks[a] || 0;
    const clicksB = tagClicks[b] || 0;
    return clicksB - clicksA;
  });

  // GLOBAL search
  const [globalSearch, setGlobalSearch] = useState("");
  const isSearching = globalSearch.trim() !== "";

  // Filter for the search results
  const searchResults = songs
    .filter((song) => {
      const term = globalSearch.toLowerCase();
      return (
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.tags.some((t) => t.toLowerCase().includes(term))
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  // If not searching, we rely on "view"
  // Filtered songs if no global search, by selectedTag
  const filteredSongs = songs
    .filter((song) => (selectedTag ? song.tags.includes(selectedTag) : true))
    .sort((a, b) => a.title.localeCompare(b.title));

  // Filter artists if no global search, by selectedTag
  const filteredArtists = allArtists.filter((artist) => {
    if (!selectedTag) return true;
    return songs.some((s) => s.artist === artist && s.tags.includes(selectedTag));
  });

  // handle user wants: when the user clicks the input => clean all filters.
  const handleSearchFocus = () => {
    pushHistory();
    // clear everything
    setSelectedTag(null);
  };

  // Switch views
  const showArtists = () => {
    pushHistory();
    setView("artists");
    setSelectedTag(null);
  };
  const showSongs = () => {
    pushHistory();
    setView("songs");
    setSelectedTag(null);
  };

  // For the user, they want to do something if the user clicks an artist.
  const handleArtistClick = (artist) => {
    // in the old code, we might do something
    // we can do pushHistory if needed
    pushHistory();
    // we used to do setSearch(artist) but now we have global search.
    // user wants the search to remain. Maybe do nothing.
    // or setGlobalSearch(artist)? Not specified. We'll just do nothing.
    // setGlobalSearch(artist);
    // show songs
    setView("songs");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="w-full py-6 px-4 text-center shadow-md bg-gray-800 text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Open Mic del Legado Piano Bar
        </h1>
        <p className="text-base mt-1">
          curado por{" "}
          <a
            href="https://instagram.com/lucaselfire"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-lime-300 hover:text-lime-200 transition"
          >
            @lucaselfire
          </a>
        </p>
      </header>

      {/* Undo button (the user wants a place for it, let's put top-right or top-left) */}
      <div className="w-full max-w-4xl mt-2 flex justify-end px-4">
        <button
          className="px-3 py-1 bg-yellow-200 text-gray-700 rounded hover:bg-yellow-300"
          onClick={undo}
        >
          Deshacer
        </button>
      </div>

      {/* New Global Search (always visible) */}
      <div className="w-full max-w-4xl mt-4 flex flex-col items-center px-4">
        <div className="mb-6 w-full max-w-xl bg-white p-3 rounded shadow-sm">
          <input
            type="text"
            placeholder="Nuevo Buscador: Título, Artista, Etiqueta, etc..."
            className="block w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            onFocus={handleSearchFocus}  
          />
        </div>

        {/* Etiquetas (click on a filter => cancels the search) => we already do setGlobalSearch('') in toggleTagFilter. */}
        <div className="mb-4 w-full max-w-2xl flex flex-wrap gap-2 justify-center">
          {sortedTags.map((tag, i) => (
            <span
              key={i}
              onClick={() => toggleTagFilter(tag)}
              className={
                "text-sm font-medium px-2 py-1 rounded cursor-pointer transition border " +
                (selectedTag === tag
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100")
              }
            >
              {tag}
            </span>
          ))}
        </div>

        {/* "Ver Canciones" / "Ver Artistas" buttons */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={showSongs}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            Ver Canciones
          </button>
          <button
            onClick={showArtists}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            Ver Artistas
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="w-full max-w-4xl flex-1 px-4 pb-10">
        {/* isSearching => show results instead of normal view */}
        {globalSearch.trim() !== "" ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Resultados de la búsqueda</h2>
            <ul className="w-full max-w-2xl mx-auto space-y-3">
              {searchResults.map((song, idx) => (
                <li
                  key={idx}
                  className="bg-white border border-gray-200 p-4 rounded shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <a
                      href={song.lyricsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-indigo-900 hover:underline"
                    >
                      {song.title}
                    </a>
                    <span
                      className="block text-sm text-indigo-600 cursor-pointer hover:underline"
                      onClick={() => console.log("Artist clicked:", song.artist)}
                    >
                      {song.artist}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end ml-2">
                    {song.tags.map((tag, i) => (
                      <span
                        key={i}
                        onClick={() => toggleTagFilter(tag)}
                        className="text-xs font-medium text-gray-700 bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Not searching => show normal view
          <>
            {view === "artists" && (
              <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-bold mb-4">Lista de Artistas</h2>
                <ul className="w-full md:w-2/3 space-y-2">
                  {filteredArtists.map((artist, index) => (
                    <li
                      key={index}
                      className="bg-white border border-gray-200 p-3 rounded shadow-sm hover:shadow-md transition"
                    >
                      <button
                        onClick={() => handleArtistClick(artist)}
                        className="text-lg font-medium text-indigo-800 hover:underline"
                      >
                        {artist}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {view === "songs" && (
              <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-bold mb-4">Lista de Canciones</h2>
                <ul className="w-full max-w-2xl space-y-3">
                  {filteredSongs.map((song, index) => (
                    <li
                      key={index}
                      className="bg-white border border-gray-200 p-4 rounded shadow-sm hover:shadow-md transition flex items-center justify-between"
                    >
                      <div>
                        <a
                          href={song.lyricsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-indigo-900 hover:underline"
                        >
                          {song.title}
                        </a>
                        <span
                          className="block text-sm text-indigo-600 cursor-pointer hover:underline"
                          onClick={() => console.log("Artist clicked:", song.artist)}
                        >
                          {song.artist}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-end ml-2">
                        {song.tags.map((tag, i) => (
                          <span
                            key={i}
                            onClick={() => toggleTagFilter(tag)}
                            className="text-xs font-medium text-gray-700 bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* If there's a selectedTag, show a button to clear it */}
        {selectedTag && (
          <div className="text-center mt-6">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
              onClick={() => {
                pushHistory();
                setSelectedTag(null);
              }}
            >
              Limpiar etiqueta
            </button>
          </div>
        )}
      </main>

      <footer className="w-full bg-gray-50 py-4 text-center text-sm text-gray-500">
        &copy; 2025 - El Legado Piano Bar
      </footer>
    </div>
  );
}

// Additional test cases
export function testSongCatalog() {
  // Check if 'songs' is an array
  if (!Array.isArray(songs)) {
    throw new Error("songs is not an array");
  }

  // Basic tests
  const titles = songs.map((s) => s.title);
  if (!titles.includes("A Donde Vamos")) {
    throw new Error("Missing 'A Donde Vamos'");
  }
  if (!titles.includes("Bohemian Rhapsody")) {
    throw new Error("Missing 'Bohemian Rhapsody'");
  }

  // If no error, all is well
  console.log("All tests passed successfully!");
}
