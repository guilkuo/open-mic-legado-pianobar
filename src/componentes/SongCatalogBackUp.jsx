import { useState, useMemo } from "react";

//////////////////////////////////////////////////////////
// Sólo movemos el input de búsqueda y el botón Reiniciar
// al footer (sticky bottom). Resto igual.
//////////////////////////////////////////////////////////

// Canciones con duplicados (los removemos)
const rawSongs = [
  {
    title: "La Barca",
    artist: "Luis Miguel",
    tags: ["#Bolero", "#Internacional"],
    lyricsUrl: "https://www.letras.com/luis-miguel/la-barca/"
  },
  {
    title: "Historia de un amor",
    artist: "Luis Miguel",
    tags: ["#Bolero", "#Internacional"],
    lyricsUrl: "https://www.letras.com/luis-miguel/26127/"
  },
  {
    title: "Sueña",
    artist: "Luis Miguel",
    tags: ["#Bolero", "#Internacional"],
    lyricsUrl: "https://www.letras.com/luis-miguel/108645/"
  },
  {
    title: "Amarte es un placer",
    artist: "Luis Miguel",
    tags: ["#Bolero", "#Internacional"],
    lyricsUrl: "https://www.letras.com/luis-miguel/62413/"
  },
  {
    title: "La Incondicional",
    artist: "Luis Miguel",
    tags: ["#Bolero", "#Internacional"],
    lyricsUrl: "https://www.letras.com/luis-miguel/26125/"
  },
  
  ////////////////////////////////////
  // 5 canciones de Shakira (muy conocidas en Argentina)
  ////////////////////////////////////
  {
    title: "Estoy Aquí",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/shakira/35912/"
  },
  {
    title: "Inevitable",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/shakira/35926/"
  },
  {
    title: "Ciega, Sordomuda",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/shakira/35922/"
  },
  {
    title: "Pies descalzos, sueños blancos",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/shakira/25555/"
  },
  {
    title: "Hips Don't Lie",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/shakira/hips-dont-lie/"
  },
  {
    title: "Waka Waka",
    artist: "Shakira",
    tags: ["#Pop", "#Internacional", "#2010s"],
    lyricsUrl: "https://www.letras.com/shakira/waka-waka/"
  },
  
  ////////////////////////////////////
  // Etiqueta #TV => 3 de Chiquititas, 2 de Floricienta, 2 de Cebollitas, 2 de Las Primas,
  // 5 cortinas de televisión de los 90, 5 clásicas de Disney
  ////////////////////////////////////
  
  // Chiquititas
  {
    title: "Corazón con Agujeritos",
    artist: "Chiquititas",
    tags: ["#TV", "#Infantil", "#Nacional"],
    lyricsUrl: "https://www.letras.com/chiquititas/713778/"
  },
  {
    title: "Pimpollo",
    artist: "Chiquititas",
    tags: ["#TV", "#Infantil", "#Nacional"],
    lyricsUrl: "https://www.letras.com/chiquititas/pimpollo/"
  },
  {
    title: "Todo Todo Todo",
    artist: "Chiquititas",
    tags: ["#TV", "#Infantil", "#Nacional"],
    lyricsUrl: "https://www.letras.com/chiquititas/713793/"
  },
  
  // Floricienta
  {
    title: "Flores Amarillas",
    artist: "Floricienta",
    tags: ["#TV", "#Infantil", "#Nacional"],
    lyricsUrl: "https://www.letras.com/floricienta/206957/"
  },
  
  // Cebollitas
  {
    title: "Subcampeón",
    artist: "Cebollitas",
    tags: ["#TV", "#Infantil", "#Nacional"],
    lyricsUrl: "https://www.letras.com/cebollitas/subcampeon/"
  },
  // Las Primas
  {
    title: "Saca la Mano Antonio",
    artist: "Las Primas",
    tags: ["#TV", "#Pop", "#Nacional"],
    lyricsUrl: "https://www.letras.com/las-primas/saca-la-mano-antonio/"
  },
  
  // 5 cortinas de televisión argentina de los años 90
  {
    title: "Amigovios",
    artist: "Cortina TV",
    tags: ["#TV", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/varios/amigovios/"
  },
  {
    title: "La Banda del Golden Rocket",
    artist: "Cortina TV",
    tags: ["#TV", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/varios/la-banda-del-golden-rocket/"
  },
  
  // 5 Canciones clásicas de Disney de distintas décadas
  {
    title: "Un Mundo Ideal",
    artist: "Disney (Aladdin)",
    tags: ["#TV", "#Infantil", "#Internacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/aladdin/un-mundo-ideal/"
  },
  {
    title: "Bella y Bestia Son",
    artist: "Disney (La Bella y la Bestia)",
    tags: ["#TV", "#Infantil", "#Internacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/disney/bella-y-bestia-son/"
  },
  
  
  ////////////////////////////////////
  // Género Cuarteto: 5 canciones de Rodrigo
  ////////////////////////////////////
  {
    title: "La Mano de Dios",
    artist: "Rodrigo",
    tags: ["#Cuarteto", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/rodrigo/la-mano-de-dios/"
  },
  {
    title: "Ocho Cuarenta",
    artist: "Rodrigo",
    tags: ["#Cuarteto", "#Nacional"],
    lyricsUrl: "https://www.letras.com/rodrigo/599857/"
  },
  {
    title: "Amor Clasificado",
    artist: "Rodrigo",
    tags: ["#Cuarteto", "#Nacional"],
    lyricsUrl: "https://www.letras.com/rodrigo/195569/"
  },
  {
    title: "Cómo le digo",
    artist: "Rodrigo",
    tags: ["#Cuarteto", "#Nacional"],
    lyricsUrl: "https://www.letras.com/rodrigo/196492/"
  },
  
  ////////////////////////////////////
  // De La Mona Jiménez
  ////////////////////////////////////
  {
    title: "Quien Se Ha Tomado Todo el Vino",
    artist: "La Mona Jiménez",
    tags: ["#Cuarteto", "#Nacional"],
    lyricsUrl: "https://www.letras.com/la-mona-jimenez/quien-se-ha-tomado-todo-el-vino/"
  },
  {
    title: "Beso a Beso",
    artist: "La Mona Jiménez",
    tags: ["#Cuarteto", "#Nacional"],
    lyricsUrl: "https://www.letras.com/la-mona-jimenez/beso-a-beso/"
  },
  
  ////////////////////////////////////
  // Luck Ra
  ////////////////////////////////////
  {
    title: "La Morocha",
    artist: "Luck Ra",
    tags: ["#Cuarteto", "#Nacional", "#2020s"],
    lyricsUrl: "https://www.letras.com/luck-ra/la-morocha/"
  },
  {
    title: "Hola Perdida",
    artist: "Luck Ra",
    tags: ["#Cuarteto", "#Nacional", "#2020s"],
    lyricsUrl: "https://www.letras.com/luck-ra/hola-perdida-part-khea/"
  },
  ////////////////////////////////////
  // Tag #MujeresArgentinas para Emilia Mernes, María Becerra, Nicki Nicole, Tita Merello, Susana Gimenez, Mercedes Sosa, Erica García, Hilda Lizarazu, Fabiana Cantilo
  ////////////////////////////////////
  
  // 3 Emilia Mernes
  {
    title: "Perdonarte, Para qué?",
    artist: "Emilia Mernes",
    tags: ["#Pop", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/los-angeles-azules/perdonarte-para-que-part-emilia/"
  },
  {
    title: "Automático",
    artist: "María Becerra",
    tags: ["#Pop", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/maria-becerra/automatico/"
  },
  // 2 Tita Merello
  {
    title: "Se Dice de Mí",
    artist: "Tita Merello",
    tags: ["#Tango", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/tita-merello/se-dice-de-mi/"
  },
  
  
  // 5 temas folklóricos de Mercedes Sosa
  {
    title: "Gracias a la Vida",
    artist: "Mercedes Sosa",
    tags: ["#Folklore", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/mercedes-sosa/37544/"
  },
  {
    title: "Alfonsina y el Mar",
    artist: "Mercedes Sosa",
    tags: ["#Folklore", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/mercedes-sosa/37548/"
  },
  {
    title: "Todo Cambia",
    artist: "Mercedes Sosa",
    tags: ["#Folklore", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/mercedes-sosa/37545/"
  },
  {
    title: "Como la cigarra",
    artist: "Mercedes Sosa",
    tags: ["#Folklore", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/mercedes-sosa/63295/"
  },
  
  // 2 temas de Erica García
  {
    title: "Positiva",
    artist: "Erica García",
    tags: ["#Rock", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/erica-garcia/positiva/"
  },
  
  // 4 temas de Hilda Lizarazu
  {
    title: "Caribe Sur",
    artist: "Hilda Lizarazu",
    tags: ["#Pop", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/man-ray/197466/"
  },
  {
    title: "Todo cambia",
    artist: "Hilda Lizarazu",
    tags: ["#Pop", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/man-ray/196184/"
  },
  {
    title: "Sola en los bares",
    artist: "Hilda Lizarazu",
    tags: ["#Pop", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/man-ray/197505/"
  },
  
  // 7 temas de Fabiana Cantilo
  {
    title: "Mi Enfermedad",
    artist: "Fabiana Cantilo",
    tags: ["#Rock", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/fabiana-cantilo/387805/"
  },
  {
    title: "Mary Poppins y el Deshollinador",
    artist: "Fabiana Cantilo",
    tags: ["#Rock", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/fabiana-cantilo/414995/"
  },
  {
    title: "Cleopatra, la Reina del Twist",
    artist: "Fabiana Cantilo",
    tags: ["#Rock", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/fabiana-cantilo/387791/"
  },
  {
    title: "Ya Fue",
    artist: "Fabiana Cantilo",
    tags: ["#Rock", "#Nacional", "#MujeresArgentinas"],
    lyricsUrl: "https://www.letras.com/fabiana-cantilo/ya-fue/"
  },
  
  ////////////////////////////////////
  // 3 canciones de Vilma Palma
  ////////////////////////////////////
  {
    title: "La Pachanga",
    artist: "Vilma Palma e Vampiros",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/vilma-palma-e-vampiros/129501/"
  },
  {
    title: "Auto Rojo",
    artist: "Vilma Palma e Vampiros",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/vilma-palma-e-vampiros/68974/"
  },
  {
    title: "Bye Bye (dejame que te toque la piel",
    artist: "Vilma Palma e Vampiros",
    tags: ["#Pop", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/vilma-palma-e-vampiros/129494/"
  },
  
  ////////////////////////////////////
  // Tirá para arriba (Zas)
  ////////////////////////////////////
  {
    title: "Tirá para Arriba",
    artist: "Miguel Mateos/ZAS",
    tags: ["#Rock", "#Nacional", "#1980s"],
    lyricsUrl: "https://www.letras.com/miguel-mateos/tira-para-arriba/"
  },
  
  ////////////////////////////////////
  // 2 de Pedro y Pablo
  ////////////////////////////////////
  {
    title: "La Marcha de la Bronca",
    artist: "Pedro y Pablo",
    tags: ["#Rock", "#Nacional", "#1970s"],
    lyricsUrl: "https://www.letras.com/pedro-y-pablo/la-marcha-de-la-bronca/"
  },
  
  ////////////////////////////////////
  // 2 más de Virus
  ////////////////////////////////////
  {
    title: "Pronta Entrega",
    artist: "Virus",
    tags: ["#Rock", "#Nacional", "#1980s"],
    lyricsUrl: "https://www.letras.com/virus/222337/"
  },
  {
    title: "Amor Descartable",
    artist: "Virus",
    tags: ["#Rock", "#Nacional", "#1980s"],
    lyricsUrl: "https://www.letras.com/virus/222333/"
  },
  
  ////////////////////////////////////
  // 3 de Divididos
  ////////////////////////////////////
  {
    title: "Spaghetti del Rock",
    artist: "Divididos",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/divididos/68659/"
  },
  {
    title: "Qué Ves",
    artist: "Divididos",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/divididos/que-ves/"
  },
  {
    title: "Ala Delta",
    artist: "Divididos",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/divididos/68658/"
  },
  
  ////////////////////////////////////
  // 3 de Pappo
  ////////////////////////////////////
  {
    title: "Sucio y Desprolijo",
    artist: "Pappo",
    tags: ["#Rock", "#Nacional", "#1970s"],
    lyricsUrl: "https://www.letras.com/pappo/sucio-y-desprolijo/"
  },
  {
    title: "El Hombre Suburbano",
    artist: "Pappo",
    tags: ["#Rock", "#Nacional", "#1970s"],
    lyricsUrl: "https://www.letras.com/pappo/el-hombre-suburbano/"
  },
  {
    title: "Ruta 66",
    artist: "Pappo",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/pappo/2283521/"
  },
  
  ////////////////////////////////////
  // 3 de Viejas Locas
  ////////////////////////////////////
  {
    title: "Me Gustas Mucho",
    artist: "Viejas Locas",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/viejas-locas/217359/"
  },
  
  
  ////////////////////////////////////
  // 3 de Intoxicados
  ////////////////////////////////////
  {
    title: "Fuego",
    artist: "Intoxicados",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/intoxicados/322554/"
  },
  {
    title: "Nunca Quise",
    artist: "Intoxicados",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/intoxicados/nunca-quise/"
  },
  {
    title: "Reggae para los Amigos",
    artist: "Intoxicados",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/intoxicados/reggae-para-los-amigos/"
  },
  
    { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
    { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
    { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
    // Fito Páez
  ///////////////////////////////////////////////////////////
  {
    title: "Fue Amor",
    artist: "Fito Páez",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/fito-paez/fue-amor/"
    },
    {
    title: "Polaroid de locura ordinaria",
    artist: "Fito Páez",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/fito-paez/76120/"
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
    lyricsUrl: "https://www.letras.com/fito-paez/201165/"
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
    lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/530333/"
    },
    {
    title: "Barro Tal Vez",
    artist: "Luis Alberto Spinetta",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/569033/"
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
    lyricsUrl: "https://www.letras.com/luis-alberto-spinetta/568494/"
    },
    
    ///////////////////////////////////////////////////////////
    // Intoxicados / Viejas Locas
    ///////////////////////////////////////////////////////////
  
    {
    title: "Todo Sigue Igual",
    artist: "Viejas Locas",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/viejas-locas/214250/"
    },
    {
    title: "Homero",
    artist: "Viejas Locas",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/viejas-locas/325915/"
    },
    {
    title: "Nunca Quise",
    artist: "Intoxicados",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/intoxicados/322559/"
    },
    
    ///////////////////////////////////////////////////////////
    // Gilda (ejemplo: "No Me Arrepiento..." ya lo tienes, "Se me ha perdido un corazón" igual)
    ///////////////////////////////////////////////////////////
    {
    title: "Paisaje",
    artist: "Gilda",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl: "https://www.letras.com/gilda/916612/"
    },
    {
    title: "Corazón Valiente",
    artist: "Gilda",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl: "https://www.letras.com/gilda/529891/"
    },
    
    ///////////////////////////////////////////////////////////
    // Gustavo Cerati (Persiana Americana está con Soda, ojo duplicado, omito)
    ///////////////////////////////////////////////////////////
    {
    title: "Crimen",
    artist: "Gustavo Cerati",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/gustavo-cerati/535873/"
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
    lyricsUrl: "https://www.letras.com/gustavo-cerati/1550668/"
    },
    {
    title: "Zona de Promesas",
    artist: "Gustavo Cerati",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/gustavo-cerati/1620179/"
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
    lyricsUrl: "https://www.letras.com/gustavo-cerati/1509916/"
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
    title: "Inconsciente colectivo",
    artist: "Charly García",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/charly-garcia/196778/"
    },
    {
    title: "Ojos de Video Tape",
    artist: "Charly García",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/charly-garcia/ojos-de-video-tape/"
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
    lyricsUrl: "https://www.letras.com/los-pericos/546923/"
    },
    
    ///////////////////////////////////////////////////////////
    // Los Fabulosos Cadillacs (Matador ya, agrega 'Carnaval Toda La Vida')
    ///////////////////////////////////////////////////////////
    {
    title: "Carnaval Toda La Vida",
    artist: "Los Fabulosos Cadillacs",
    tags: ["#Ska", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/23534/"
    },
    
    ///////////////////////////////////////////////////////////
    // Los Auténticos Decadentes
    ///////////////////////////////////////////////////////////
    {
    title: "Corazón",
    artist: "Los Auténticos Decadentes",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl:"https://www.letras.com/los-autenticos-decadentes/1055772/"
    },
    {
    title: "La Guitarra",
    artist: "Los Auténticos Decadentes",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/23522/"
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
    tags: ["#Rock", "#Nacional", "#1970s"],
    lyricsUrl: "https://www.letras.com/los-gatos/194886/"
    },
    
    ///////////////////////////////////////////////////////////
    // Los Abuelos de la Nada
    ///////////////////////////////////////////////////////////
    {
    title: "Mil Horas",
    artist: "Los Abuelos de la Nada",
    tags: ["#Rock", "#Nacional", "#1980s"],
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
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/turf/loco-un-poco/"
    },
    {
    title: "Casanova",
    artist: "Turf",
    tags: ["#Rock", "#Nacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/turf/casanova/"
    },
    {
    title: "Pasos al Costado",
    artist: "Turf",
    tags: ["#Rock", "#Nacional",  "#2000s"],
    lyricsUrl: "https://www.letras.com/turf/pasos-al-costado/"
    },
    {
    title: "Magia Blanca",
    artist: "Turf",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/turf/magia-blanca/"
    },
    {
    title: "Yo No Me Quiero Casar",
    artist: "Turf",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/turf/yo-no-me-quiero-casar/"
    },
    {
    title: "Cuatro Personalidades",
    artist: "Turf",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/turf/cuatro-personalidades/"
    },
    
    ///////////////////////////////////////////////////////////
    // Tan Biónica
    ///////////////////////////////////////////////////////////
    {
    title: "La Melodía de Dios",
    artist: "Tan Biónica",
    tags: ["#Pop", "#Nacional", "#2010s"],
    lyricsUrl: "https://www.letras.com/tan-bionica/la-melodia-de-dios/"
    },
    
    ///////////////////////////////////////////////////////////
    // Miranda!
    ///////////////////////////////////////////////////////////
    {
    title: "Don",
    artist: "Miranda!",
    tags: ["#Pop", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/miranda/don/"
    },
    {
    title: "Yo Te Diré",
    artist: "Miranda!",
    tags: ["#Pop", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/miranda/yo-te-dire/"
    },
    
    ///////////////////////////////////////////////////////////
    // Babasónicos
    ///////////////////////////////////////////////////////////
    {
    title: "Irresponsables",
    artist: "Babasónicos",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/babasonicos/81760/"
    },
    {
    title: "El Loco",
    artist: "Babasónicos",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/babasonicos/1213650/"
    },
    {
    title: "Yegua",
    artist: "Babasónicos",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/babasonicos/979926/"
    },
    {
    title: "Putita",
    artist: "Babasónicos",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/babasonicos/76765/"
    },
  
    
    ///////////////////////////////////////////////////////////
    // Nestor En Bloque
    ///////////////////////////////////////////////////////////
    {
    title: "Una Calle Nos Separa",
    artist: "Nestor En Bloque",
    tags: ["#Rock", "#Nacional", "#2000s"],
    lyricsUrl: "https://www.letras.com/nestor-en-bloque/449492/"
    },
    
    ///////////////////////////////////////////////////////////
    // Virus
    ///////////////////////////////////////////////////////////
    {
    title: "Luna de Miel en la Mano",
    artist: "Virus",
    tags: ["#Rock", "#Nacional", "#1980s"],
    lyricsUrl: "https://www.letras.com/virus/140173/"
    },
    {
      title: "Pronta entrega",
      artist: "Virus",
      tags: ["#Rock", "#Nacional", "#1980s"],
      lyricsUrl: "https://www.letras.com/virus/201428/"
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
    tags: ["#Cumbia", "#Nacional", "#1990s"],
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
    lyricsUrl: "https://www.letras.com/bee-gees/3601/"
    },
    {
    title: "Killing Me Softly",
    artist: "Roberta Flack",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/roberta-flack/"
    },
    {
    title: "I Will Survive",
    artist: "Gloria Gaynor",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: ""
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
    lyricsUrl: "https://www.letras.com/elton-john/"
    },
    {
    title: "Piano Man",
    artist: "Billy Joel",
    tags: ["#Pop", "#Internacional"],
    lyricsUrl: "https://www.letras.com/billy-joel/"
    },
    {
    title: "Hotel California",
    artist: "Eagles",
    tags: ["#Rock", "#Internacional"],
    lyricsUrl: "https://www.letras.com/eagles/"
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
    lyricsUrl: "https://www.letras.com/antonio-rios/"
    },
    {
    title: "La Ventanita",
    artist: "Grupo Sombras",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl: "https://www.letras.com/grupo-sombras/"
    },
    {
    title: "Iluminará",
    artist: "Ráfaga",
    tags: ["#Cumbia", "#Nacional"],
    lyricsUrl: "https://www.letras.com/rafaga/"
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
    lyricsUrl: "https://www.letras.com/yerba-brava/"
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
    // ...
    { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
    { title: "Bohemian Rhapsody", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/" },
    { title: "Muchachos", artist: "La Mosca", tags: ["#Cumbia", "#Nacional"], lyricsUrl: "https://www.letras.com/la-mosca/muchachos/" },
    // etc...
    { title: "Imagine", artist: "John Lennon", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/john-lennon/imagine/" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/bon-jovi/livin-on-a-prayer/" },
    { title: "Tengo", artist: "Sandro", tags: ["#Rock", "#Nacional", "#1960s"], lyricsUrl: "https://www.letras.com/sandro/tengo/" },
    { title: "Mariposa Tecknicolor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/mariposa-tecknicolor/" },
    { title: "Wonderwall", artist: "Oasis", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/oasis/wonderwall/" },
    { title: "La Macarena", artist: "Los del Río", tags: ["#Pop", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-del-rio/la-macarena/" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/nirvana/smells-like-teen-spirit/" },
    { title: "La Copa de la Vida", artist: "Ricky Martin", tags: ["#Pop", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/ricky-martin/la-copa-de-la-vida/" },
    { title: "Thriller", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/thriller/" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/guns-n-roses/sweet-child-o-mine/" },
    { title: "Persiana Americana", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/persiana-americana/" },
    { title: "Billie Jean", artist: "Michael Jackson", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/michael-jackson/billie-jean/" },
    { title: "Garota de Ipanema", artist: "Tom Jobim & Vinicius de Moraes", tags: ["#BossaNova", "#Brasil", "#1960s"], lyricsUrl: "https://www.letras.com/antonio-carlos-jobim/20712/" },
    { title: "Ai Se Eu Te Pego", artist: "Michel Teló", tags: ["#Pop", "#Brasil", "#2010s"], lyricsUrl: "https://www.letras.com/michel-telo/ai-se-eu-te-pego/" },
    { title: "Mas que Nada", artist: "Jorge Ben Jor", tags: ["#Samba", "#Brasil", "#1960s"], lyricsUrl: "https://www.letras.com/jorge-ben-jor/64941/" },
    { title: "Aquarela do Brasil", artist: "Ary Barroso", tags: ["#Brasil", "#1930s"], lyricsUrl: "https://www.letras.com/ary-barroso/66523/" },
    { title: "La Lambada", artist: "Kaoma", tags: ["#Lambada", "#Brasil", "#1980s"], lyricsUrl: "https://www.letras.com/kaoma/lambada/" },
  
    // Nuevas (30 canciones)
    { title: "En la Ciudad de la Furia", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/en-la-ciudad-de-la-furia/" },
    { title: "El Matador", artist: "Los Fabulosos Cadillacs", tags: ["#Ska", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/" },
    { title: "Siguiendo la Luna", artist: "Los Fabulosos Cadillacs", tags: ["#Ska", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/siguiendo-la-luna/" },
    { title: "Costumbres Argentinas", artist: "Los Abuelos de la Nada", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/los-abuelos-de-la-nada/" },
    { title: "La Bestia Pop", artist: "Patricio Rey y sus Redonditos de Ricota", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/patricio-rey-y-sus-redonditos-de-ricota/446903/" },
    { title: "Ji Ji Ji", artist: "Patricio Rey y sus Redonditos de Ricota", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/patricio-rey-y-sus-redonditos-de-ricota/446886/" },
    { title: "Seminare", artist: "Serú Girán", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/seru-giran/seminare/" },
    { title: "Rasguña las Piedras", artist: "Sui Generis", tags: ["#Rock", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/sui-generis/" },
    { title: "Rezo por Vos", artist: "Charly García & Luis Alberto Spinetta", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/charly-garcia/" },
    { title: "Imágenes Paganas", artist: "Virus", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/virus/513869/" },
    { title: "Mi Enfermedad", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/448628/" },
    { title: "Lamento Boliviano", artist: "Los Enanitos Verdes", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-enanitos-verdes/lamento-boliviano/" },
    { title: "La Guitarra", artist: "Los Auténticos Decadentes", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-autenticos-decadentes/" },
    { title: "Tatuada", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/tatuada/" },
    { title: "Se Me Ha Perdido un Corazón", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/520711/" },
    { title: "No Me Arrepiento de Este Amor", artist: "Gilda", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/gilda/645063/" },
    { title: "Todo Cambia", artist: "Mercedes Sosa", tags: ["#Folklore", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/mercedes-sosa/196743/" },
    { title: "Zamba para Olvidar", artist: "Mercedes Sosa", tags: ["#Folklore", "#Nacional", "#1970s"], lyricsUrl: "https://www.letras.com/mercedes-sosa/357906/" },
    { title: "Dulce Condena", artist: "Los Rodriguez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-rodriguez/" },
    { title: "Sin Documentos", artist: "Los Rodriguez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/los-rodriguez/" },
    { title: "Alma de Diamante", artist: "Spinetta Jade", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/spinetta-jade/413368/" },
    { title: "Malo", artist: "Bebe", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/bebe/malo/" },
    { title: "Latinoamérica", artist: "Calle 13", tags: ["#Reggaeton", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/calle-13/latinoamerica/" },
    { title: "Mi Gente", artist: "Héctor Lavoe", tags: ["#Salsa", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/hector-lavoe/mi-gente/" },
    { title: "Despacito", artist: "Luis Fonsi", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/luis-fonsi/despacito-feat-daddy-yankee/" },
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
    { title: "November Rain", artist: "Guns N' Roses", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/guns-n-roses/" },
  
    // 2 Michael Jackson => already have Thriller & Billie Jean
  
    // 4 Luis Miguel
    { title: "La Incondicional", artist: "Luis Miguel", tags: ["#Pop", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/la-incondicional/" },
    { title: "Ahora Te Puedes Marchar", artist: "Luis Miguel", tags: ["#Pop", "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/ahora-te-puedes-marchar/" },
    { title: "Culpable o No", artist: "Luis Miguel", tags: ["#Pop",  "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/" },
    { title: "Cuando Calienta el Sol", artist: "Luis Miguel", tags: ["#Pop",  "#1980s"], lyricsUrl: "https://www.letras.com/luis-miguel/cuando-calienta-el-sol/" },
  
    // 3 Fito Paez => we have 1: Mariposa Tecknicolor => add 2 more
    { title: "Fue amor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/fito-paez/" },
  
    // 4 Fabiana Cantilo => we have 1: Mi Enfermedad => add 3 more
    { title: "Mary Poppins y el Deshollinador", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/mary-poppins-y-el-deshollinador/" },
    { title: "Nada Es Para Siempre", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#2000s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/713659/" },
    { title: "Una Tregua", artist: "Fabiana Cantilo", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fabiana-cantilo/1055251/" },
  
    // 4 Shakira => we have 2: BZRP #53, La Bicicleta => add 2 more
    { title: "Hips Don't Lie", artist: "Shakira", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/shakira/328085/" },
    { title: "Ojos Así", artist: "Shakira", tags: ["#Pop", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/shakira/" },
  
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
  { title: "Al Lado del Camino", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/77322/" },
  { title: "A Rodar Mi Vida", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/65962/" },
  { title: "Un Vestido y un Amor", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/69242/" },
  { title: "La Rueda Mágica", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/la-rueda-magica/" },
  { title: "Polaroid de Locura Ordinaria", artist: "Fito Páez", tags: ["#Rock", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/fito-paez/polaroid-de-locura-ordinaria/" },
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
  ////////////////////////////////////
  // Bersuit Vergarabat
  ////////////////////////////////////
  {
    title: "Toco y me voy",
    artist: "Bersuit Vergarabat",
    tags: ["#Rock", "#Nacional", "#2000"],
    lyricsUrl: "https://www.letras.com/bersuit-vergarabat/144359/"
  },
  {
    title: "Murguita del Sur",
    artist: "Bersuit Vergarabat",
    tags: ["#Rock", "#Nacional", "#2000"],
    lyricsUrl: "https://www.letras.com/bersuit-vergarabat/murguita-del-sur/"
  },
  {
    title: "La Bolsa",
    artist: "Bersuit Vergarabat",
    tags: ["#Rock", "#Nacional", "#2000"],
    lyricsUrl: "https://www.letras.com/bersuit-vergarabat/47233/"
  },
  
  ////////////////////////////////////
  // La Vela Puerca
  ////////////////////////////////////
  {
    title: "El Viejo",
    artist: "La Vela Puerca",
    tags: ["#Rock", "#Internacional", "#2000"],
    lyricsUrl: "https://www.letras.com/la-vela-puerca/319385/"
  },
  
  ////////////////////////////////////
  // No Te Va Gustar
  ////////////////////////////////////
  {
    title: "A Las Nueve",
    artist: "No Te Va Gustar",
    tags: ["#Rock"],
    lyricsUrl: "https://www.letras.com/no-te-va-gustar/a-las-nueve/"
  },
  
  ////////////////////////////////////
  // Las Pelotas
  ////////////////////////////////////
  {
    title: "Si Supieras",
    artist: "Las Pelotas",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/las-pelotas/204389/"
  },
  {
    title: "Será",
    artist: "Las Pelotas",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/las-pelotas/204388/"
  },
  
  ////////////////////////////////////
  // Divididos
  ////////////////////////////////////
  {
    title: "Nene de Antes",
    artist: "Divididos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/divididos/"
  },
  {
    title: "Ala Delta",
    artist: "Divididos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/divididos/"
  },
  
  ////////////////////////////////////
  // Los Piojos
  ////////////////////////////////////
  {
    title: "Al Atardecer",
    artist: "Los Piojos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-piojos/"
  },
  {
    title: "Ando Ganas",
    artist: "Los Piojos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-piojos/"
  },
  {
    title: "Vine Hasta Aquí",
    artist: "Los Piojos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-piojos/"
  },
  {
    title: "Como Alí",
    artist: "Los Piojos",
    tags: ["#Rock", "#Nacional"],
    lyricsUrl: "https://www.letras.com/los-piojos/"
  },
  //// Cristian Castro 
  {
    title: "No podrás",
    artist: "Cristian Castro",
    tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/castro-cristian/155205/"
    },
    {
    title: "Lloviendo estrellas",
    artist: "Cristian Castro",
    tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
    lyricsUrl: "https://www.letras.com/castro-cristian/568427/"
    },
    {
      title: "Es mejor así",
      artist: "Cristian Castro",
      tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
      lyricsUrl: "https://www.letras.com/castro-cristian/7163/"
      },
      {
        title: "Lloran las rosas",
        artist: "Cristian Castro",
        tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
        lyricsUrl: "https://www.letras.com/castro-cristian/7156/"
        },    
        {
        title: "Fuego de noche, nieve de día",
        artist: "Ricky Martin",
        tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
        lyricsUrl: "https://www.letras.com/ricky-martin/24717/"
        },    
        {
        title: "Tu recuerdo",
        artist: "Ricky Martin",
        tags: ["#Romántico", "#Pop", "#internacional", "#1990s"],
        lyricsUrl: "https://www.letras.com/ricky-martin/792703/"
        },
        { title: "Creo", artist: "Callejeros", tags: ["#Rock", "#Nacional"], lyricsUrl: "https://www.letras.com/callejeros/creo/" },
  { title: "Cuando Pase el Temblor", artist: "Soda Stereo", tags: ["#Rock", "#Nacional", "#1980s"], lyricsUrl: "https://www.letras.com/soda-stereo/443865/" },
  { title: "Purple Rain", artist: "Prince", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/prince/purple-rain/" },
  { title: "Tarea Fina", artist: "Patricio Rey y sus Redonditos de Ricota", tags: ["#Rock", "#Nacional"], lyricsUrl: "https://www.letras.com/patricio-rey-y-sus-redonditos-de-ricota/tarea-fina/" },
  { title: "Shape of You", artist: "Ed Sheeran", tags: ["#Pop", "#Internacional", "#2010s"], lyricsUrl: "https://www.letras.com/ed-sheeran/shape-of-you/" },
  { title: "Ráfaga de Amor", artist: "Ráfaga", tags: ["#Cumbia", "#Nacional", "#1990s"], lyricsUrl: "https://www.letras.com/rafaga/2319567/" },
  { title: "Agüita", artist: "Ráfaga", tags: ["#Cumbia", "#Nacional"], lyricsUrl: "https://www.letras.com/rafaga/aguita/" },
  { title: "Flowers", artist: "Miley Cyrus", tags: ["#Pop", "#Internacional", "#2020s"], lyricsUrl: "https://www.letras.com/miley-cyrus/flowers/" },
  { title: "Can't Get You Off My Mind", artist: "Lenny Kravitz", tags: ["#Rock", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/lenny-kravitz/cant-get-you-off-my-mind/" },
  { title: "Somewhere Only We Know", artist: "Keane", tags: ["#Rock", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/keane/70991/" },
  { title: "Psycho Killer", artist: "Talking Heads", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/talking-heads/12692/" },
  { title: "Killer Queen", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/killer-queen/" },
  { title: "Radio Ga Ga", artist: "Queen", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/queen/69116/" },
  { title: "Somebody to Love", artist: "Queen", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/queen/64779/" },
  { title: "Play the Game", artist: "Queen", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/queen/64796/" },
  { title: "Save Me", artist: "Queen", tags: ["#Rock", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/queen/64799/" },
  { title: "Wish You Were Here", artist: "Pink Floyd", tags: ["#Rock", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/pink-floyd/wish-you-were-here/" },
  { title: "Hoy", artist: "Gloria Estefan", tags: ["#Pop", "#Internacional", "#2000s"], lyricsUrl: "https://www.letras.com/gloria-estefan/461605/" },
  { title: "La Vida es un Carnaval", artist: "Celia Cruz", tags: ["#Salsa", "#Internacional", "#1990s"], lyricsUrl: "https://www.letras.com/celia-cruz/45950/" },
  { title: "Vos Sabés", artist: "Los Fabulosos Cadillacs", tags: ["#Ska", "#Nacional"], lyricsUrl: "https://www.letras.com/los-fabulosos-cadillacs/vos-sabes/" },
  { title: "Un Beso y Una Flor", artist: "Nino Bravo", tags: ["#Pop", "#Internacional", "#1970s"], lyricsUrl: "https://www.letras.com/nino-bravo/662791/" }
];

function deduplicateSongs(arr) {
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

export default function SongCatalog() {
  // Textos en español
  const tituloPrincipal = "Open Mic del Legado Piano Bar";
  const subtituloCurado = "curado por";
  const placeholderSearch = "Busca una canción aquí";
  const textoNoResults = "Resultados de la búsqueda";
  const textoListaArtistas = "Lista de Artistas";
  const textoListaCanciones = "Lista de Canciones";
  const textoReiniciar = "Reiniciar lista";
  const textoClearTag = "Limpiar etiqueta";
  const textoVerSongs = "Ver Canciones";
  const textoVerArtists = "Ver Artistas";

  const [selectedTag, setSelectedTag] = useState(null);
  const [history, setHistory] = useState([]);
  const [globalSearch, setGlobalSearch] = useState("");
  const [view, setView] = useState("songs");
  const [artistFilter, setArtistFilter] = useState(null);

  // Para la sección de “Ver más” en tags
  const [showAllTags, setShowAllTags] = useState(false);

  const songs = useMemo(() => deduplicateSongs(rawSongs), []);

  // Obtenemos todas las tags sin duplicados
  const allTags = useMemo(
    () => Array.from(new Set(songs.flatMap((song) => song.tags))),
    [songs]
  );

  // Obtenemos todos los artistas sin duplicados
  const allArtists = useMemo(
    () => Array.from(new Set(songs.map((song) => song.artist))),
    [songs]
  );

  function pushHistory() {
    setHistory((h) => [
      ...h,
      {
        view,
        selectedTag,
        globalSearch,
        artistFilter,
      },
    ]);
  }

  function undo() {
    if (history.length > 0) {
      const last = history[history.length - 1];
      setView(last.view);
      setSelectedTag(last.selectedTag);
      setGlobalSearch(last.globalSearch);
      setArtistFilter(last.artistFilter);
      setHistory((h) => h.slice(0, -1));
    }
  }

  // Reordenar las tags (mismo que antes).
  function tagPriority(tag) {
    const label = tag.replace("#", "");
    if (label === "Nacional") return "1";
    if (label === "Internacional") return "2";
    if (label === "Rock") return "3";
    if (label === "Cumbia") return "4";
    const decadeMatch = label.match(/^\d{4}s$/);
    if (decadeMatch) {
      const decadeVal = parseInt(label, 10);
      return "5_" + decadeVal;
    }
    return "6_" + label;
  }

  const sortedTags = useMemo(() => {
    return allTags.slice().sort((a, b) => {
      const priA = tagPriority(a);
      const priB = tagPriority(b);
      if (priA < priB) return -1;
      if (priA > priB) return 1;
      return 0;
    });
  }, [allTags]);

  // Se muestran ~5 en la primera vista
  const canShowMore = sortedTags.length > 5;
  const displayedTags = showAllTags ? sortedTags : sortedTags.slice(0, 5);

  // Reordenar la lista de artistas priorizando la cantidad de canciones.
  const filteredArtists = useMemo(() => {
    let candidate = !selectedTag
      ? allArtists
      : allArtists.filter((artist) =>
          songs.some((s) => s.artist === artist && s.tags.includes(selectedTag))
        );
    return candidate.slice().sort((a, b) => {
      const countA = songs.filter((s) => s.artist === a).length;
      const countB = songs.filter((s) => s.artist === b).length;
      if (countB === countA) {
        return a.localeCompare(b);
      } else {
        return countB - countA;
      }
    });
  }, [allArtists, selectedTag, songs]);

  const isSearching = globalSearch.trim() !== "";
  const searchResults = useMemo(() => {
    const term = globalSearch.toLowerCase();
    return songs
      .filter(
        (song) =>
          song.title.toLowerCase().includes(term) ||
          song.artist.toLowerCase().includes(term) ||
          song.tags.some((t) => t.toLowerCase().includes(term))
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [songs, globalSearch]);

  const filteredSongs = useMemo(() => {
    return songs
      .filter((s) => (!selectedTag ? true : s.tags.includes(selectedTag)))
      .filter((s) => (!artistFilter ? true : s.artist === artistFilter))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [songs, selectedTag, artistFilter]);

  function handleSearchFocus() {
    pushHistory();
    setSelectedTag(null);
    setArtistFilter(null);
  }

  function showArtists() {
    pushHistory();
    setView("artists");
    setSelectedTag(null);
    setArtistFilter(null);
  }
  function showSongs() {
    pushHistory();
    setView("songs");
    setSelectedTag(null);
    setArtistFilter(null);
  }

  function handleArtistClick(artist) {
    pushHistory();
    setArtistFilter(artist);
    setView("songs");
    setSelectedTag(null);
    setGlobalSearch("");
  }

  function handleSongArtistClick(artist) {
    pushHistory();
    setArtistFilter(artist);
    setView("songs");
    setSelectedTag(null);
    setGlobalSearch("");
  }

  function handleSongTitleClick() {
    // sin increment
  }

  function handleSongTagClick(tag) {
    pushHistory();
    setGlobalSearch("");
    setArtistFilter(null);
    setSelectedTag((prev) => (prev === tag ? null : tag));
  }

  let content;
  if (isSearching) {
    content = (
      <SearchResultsSection
        results={searchResults}
        textoNoResults={textoNoResults}
        onArtistClick={handleSongArtistClick}
        onSongClick={handleSongTitleClick}
      />
    );
  } else if (view === "artists") {
    content = (
      <ArtistsSection
        artists={filteredArtists}
        onArtistClick={handleArtistClick}
      />
    );
  } else {
    content = (
      <SongsSection
        songs={filteredSongs}
        onArtistClick={handleSongArtistClick}
        onSongClick={handleSongTitleClick}
        onTagClick={handleSongTagClick}
      />
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header sticky */}
      <header className="sticky top-0 z-50 w-full py-2 px-2 text-center shadow bg-gray-800 text-white">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">
          {tituloPrincipal}
        </h1>
        <p className="text-base mt-1">
          {subtituloCurado}{" "}
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

      {/* Sección sticky con etiquetas + botones (pero NO el buscador) */}
      <div className="sticky top-[3.2rem] z-40 bg-gray-200 w-full px-4">
        {/* Sección de etiquetas */}
        <div className="max-w-4xl mx-auto w-full mb-1 flex flex-wrap gap-1 justify-center bg-gray-100 p-1 rounded">
          {displayedTags.map((tag, i) => {
            const isSelected = selectedTag === tag;
            const baseClass =
              "text-sm font-medium px-2 py-1 rounded cursor-pointer transition border";
            let bgClass =
              " bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
            if (isSelected) {
              bgClass = " bg-gray-300 text-gray-800 border-gray-300";
            }
            return (
              <span
                key={i}
                onClick={() => {
                  pushHistory();
                  setGlobalSearch("");
                  setArtistFilter(null);
                  setSelectedTag((prev) => (prev === tag ? null : tag));
                }}
                className={baseClass + bgClass}
              >
                {tag}
              </span>
            );
          })}
          {/* Botón 'Ver más' si hay más de 5 tags, o 'Ver menos' si showAllTags === true */}
          {canShowMore && (
            !showAllTags ? (
              <button
                className="text-sm px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowAllTags(true)}
              >
                Ver más
              </button>
            ) : (
              <button
                className="text-sm px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowAllTags(false)}
              >
                Ver menos
              </button>
            )
          )}
        </div>

        {/* Botones ver canciones / artistas */}
        <div className="max-w-4xl mx-auto w-full mb-2 flex flex-wrap justify-center gap-4 p-2 bg-gray-200">
          <button
            onClick={() => {
              pushHistory();
              setView("songs");
              setSelectedTag(null);
              setArtistFilter(null);
            }}
            className="px-4 py-1 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400"
          >
            {textoVerSongs}
          </button>
          <button
            onClick={() => {
              pushHistory();
              setView("artists");
              setSelectedTag(null);
              setArtistFilter(null);
            }}
            className="px-4 py-1 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400"
          >
            {textoVerArtists}
          </button>
        </div>
      </div>

      {/* Contenido principal scrollable */}
      <main className="flex-1 overflow-y-auto px-4 pb-2 pt-2">
        {content}
        {selectedTag && (
          <div className="text-center mt-6">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
              onClick={() => {
                pushHistory();
                setSelectedTag(null);
              }}
            >
              {textoClearTag}
            </button>
          </div>
        )}
      </main>

      {/* Footer sticky, con el buscador y reiniciar */}
      <footer className="sticky bottom-0 z-50 bg-gray-800 text-gray-200 w-full text-center text-sm flex flex-col items-center p-2 gap-2">
        <div className="max-w-4xl w-full bg-white p-3 rounded shadow-sm">
          <input
            type="text"
            placeholder={placeholderSearch}
            className="block w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            onFocus={() => {
              pushHistory();
              setSelectedTag(null);
              setArtistFilter(null);
            }}
          />
        </div>

        <div className="max-w-4xl w-full flex justify-end">
          <button
            className="px-2 py-1 text-gray-300 bg-gray-700 rounded hover:bg-gray-600 text-xs"
            onClick={() => {
              if (history.length > 0) {
                const last = history[history.length - 1];
                setView(last.view);
                setSelectedTag(last.selectedTag);
                setGlobalSearch(last.globalSearch);
                setArtistFilter(last.artistFilter);
                setHistory((h) => h.slice(0, -1));
              }
            }}
          >
            {textoReiniciar}
          </button>
        </div>
        <div className="text-gray-300">
          &copy; 2025 - El Legado Piano Bar
        </div>
      </footer>
    </div>
  );
}

function SearchResultsSection({ results, textoNoResults, onArtistClick, onSongClick }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">{textoNoResults}</h2>
      <ul className="w-full max-w-2xl mx-auto space-y-3">
        {results.map((song, idx) => (
          <SongItem
            key={idx}
            song={song}
            onArtistClick={onArtistClick}
            onSongClick={onSongClick}
          />
        ))}
      </ul>
    </div>
  );
}

function ArtistsSection({ artists, onArtistClick }) {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">Lista de Artistas</h2>
      <ul className="w-full md:w-2/3 space-y-2">
        {artists.map((artist, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 p-3 rounded shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => onArtistClick(artist)}
              className="text-lg font-medium text-indigo-800 hover:underline"
            >
              {artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SongsSection({ songs, onArtistClick, onSongClick, onTagClick }) {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">Lista de Canciones</h2>
      <ul className="w-full max-w-2xl space-y-3">
        {songs.map((song, index) => (
          <SongItem
            key={index}
            song={song}
            onArtistClick={onArtistClick}
            onSongClick={onSongClick}
            onTagClick={onTagClick}
          />
        ))}
      </ul>
    </div>
  );
}

function SongItem({ song, onArtistClick, onSongClick, onTagClick }) {
  function handleTitleClick() {
    if (onSongClick) {
      onSongClick(song.title);
    }
  }

  function handleTag(tag) {
    if (onTagClick) {
      onTagClick(tag);
    }
  }

  return (
    <li className="bg-white text-gray-800 border border-gray-200 p-4 rounded shadow-sm hover:shadow-md transition flex items-center justify-between">
      <div>
        <a
          href={song.lyricsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-indigo-900 hover:underline"
          onClick={handleTitleClick}
        >
          {song.title}
        </a>
        <span
          className="block text-sm text-indigo-600 cursor-pointer hover:underline"
          onClick={() => {
            if (onArtistClick) {
              onArtistClick(song.artist);
            }
          }}
        >
          {song.artist}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 justify-end ml-2">
        {song.tags.map((tag, i) => (
          <span
            key={i}
            onClick={() => handleTag(tag)}
            className="text-xs font-medium text-gray-700 bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}

// (Test no changed)
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
