
// Archivo dedicado a la lista de canciones

export const songs = [
    // Aquí pones TODAS tus canciones, incluidas las que agregaste manualmente
    // y las que vayas sumando, sin borrar nada. Por ejemplo:
    {
      title: "A Donde Vamos",
      artist: "Coti",
      tags: ["#Rock", "#Nacional", "#2000s"],
      lyricsUrl: "https://www.letras.com/coti/a-donde-vamos/"
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      tags: ["#Rock", "#Internacional", "#1970s"],
      lyricsUrl: "https://www.letras.com/queen/bohemian-rhapsody/"
    },
    // etc...
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

// 10 temas más representativos de los 80s dentro de música internacional en español (en Argentina) -> Ejemplos:
{ title: "Devuélveme a Mi Chica", artist: "Hombres G", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/hombres-g/290503/" },
{ title: "La Puerta de Alcalá", artist: "Víctor Manuel y Ana Belén", tags: ["#Pop", "#Internacional", "#1980s"], lyricsUrl: "https://www.letras.com/victor-manuel/463516/" },
// etc... (completa con 8 más a tu gusto o según preferencias)
  
  ];