import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "La Primerisima",
    color: colors.yellow,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg",
    artists: ["Armonia 10", "La Original"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Coleccion de Oro",
    color: colors.green,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/a267237701c602ecb6fc9aa626ddb344/500x500-000000-80-0-0.jpg",
    artists: ["Agua Marina"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Afrodélico Peruvian Soul",
    color: colors.rose,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/f36ce2028a19cf5d6ed99a0d8f898d97/500x500-000000-80-0-0.jpg",
    artists: ["Jorge Pardo"],
  },
  
  {
    id: '4',
    albumId: 4,
    title: "En Vivo En Piura",
    color: colors.blue,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/2756b627e6f57482938e0835c2ba7b1a/500x500-000000-80-0-0.jpg",
    artists: ["Corazón Serrano"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Cumbia Amazonica",
    color: colors.purple,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/15192a0323c6be0b2f2bd21479774c76/500x500-000000-80-0-0.jpg",
    artists: ["Los Mirlos"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
   {
    id: '7',
    albumId: 7,
    title: "Gobal",
    color: colors.orange,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/ef489f7936c78413bc474e1d554354c3/500x500-000000-80-0-0.jpg",
    artists: ["Top 50"],
  },
    {
    id: '8',
    albumId: 8,
    title: "Grandes Éxitos Vol. 1",
    color: colors.orange,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/964f0c27031f7b598aada3a8bcb0e671/500x500-000000-80-0-0.jpg",
    artists: ["Kaliente"],
  },
    {
    id: '9',
    albumId: 9,
    title: "Aléjate de Mí",
    color: colors.orange,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/df3647b2338181294be962a3cf703cf3/500x500.jpg",
    artists: ["Camila"],
  },
    {
    id: '9',
    albumId: 9,
    title: "Perú",
    color: colors.orange,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/61/9c/5f/619c5f3a-a2a0-5da7-fe4d-d2ccd39426b0/Job37e507f0-9a6b-40b5-bd4b-ead3373b4ab3-146476012-PreviewImage_preview_image_nonvideo_sdr-Time1678731990935.png/305x305cc.webp",
    artists: ["Top 100"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Herido Corazon",
    "image": `https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg`,
    "artists": ["Armonia 10"],
    "album": "La Primerisima",
    "duration": "3:56"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Lágrima por Lágrima",
    "image": `https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg`,
    "artists": ["Armonia 10"],
    "album": "La Primerisima",
    "duration": "3:47"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Veneno Para Olvidar",
    "image": `https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg`,
    "artists": ["Armonia 10"],
    "album": "La Primerisima",
    "duration": "3:29"
  },
 /* {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://cdn-images.dzcdn.net/images/cover/28cd9c87d57eac24153a22be51dd502e/500x500-000000-80-0-0.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26"
  },*/
  {
    "id": 1,
    "albumId": 2,
    "title": "Pasitos Para Bailar",
    "image": `https://cdn-images.dzcdn.net/images/cover/a267237701c602ecb6fc9aa626ddb344/500x500-000000-80-0-0.jpg`,
    "artists": ["Agua Marina"],
    "album": "Coleccion de Oro",
    "duration": "3:19"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Amor Prohibido",
    "image": `https://cdn-images.dzcdn.net/images/cover/a267237701c602ecb6fc9aa626ddb344/500x500-000000-80-0-0.jpg`,
    "artists": ["Agua Marina"],
    "album": "Coleccion de Oro",
    "duration": "3:33"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Mil Amores",
    "image": `https://cdn-images.dzcdn.net/images/cover/a267237701c602ecb6fc9aa626ddb344/500x500-000000-80-0-0.jpg`,
    "artists": ["Agua Marina"],
    "album": "Coleccion de Oro",
    "duration": "3:21"
  },
  /*{
    "id": 4,
    "albumId": 2,
    "title": "Mix Morena",
    "image": `https://cdn-images.dzcdn.net/images/cover/2756b627e6f57482938e0835c2ba7b1a/500x500-000000-80-0-0.jpg`,
    "artists": ["Corazón Serrano"],
    "album": "En Vivo En Piura",
    "duration": "3:11"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58"
  },*/
  {
    "id": 1,
    "albumId": 3,
    "title": "Toro Mata",
    "image": `https://cdn-images.dzcdn.net/images/cover/f36ce2028a19cf5d6ed99a0d8f898d97/500x500-000000-80-0-0.jpg`,
    "artists": ["Jorge Pardo"],
    "album": "Afrodélico Peruvian Soul",
    "duration": "4:59"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "La Noche De Tu Ausencia!",
    "image": `https://cdn-images.dzcdn.net/images/cover/f36ce2028a19cf5d6ed99a0d8f898d97/500x500-000000-80-0-0.jpg`,
    "artists": ["Jorge Pardo"],
    "album": "Afrodélico Peruvian Soul",
    "duration": "4:18"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Ruperta",
    "image": `https://cdn-images.dzcdn.net/images/cover/f36ce2028a19cf5d6ed99a0d8f898d97/500x500-000000-80-0-0.jpg`,
    "artists": ["Jorge Pardo"],
    "album": "Afrodélico Peruvian Soul",
    "duration": "3:51"
  },
  /*{
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30"
  },*/
  {
    "id": 1,
    "albumId": 4,
    "title": "Mix Morena",
    "image": "https://cdn-images.dzcdn.net/images/cover/2756b627e6f57482938e0835c2ba7b1a/500x500-000000-80-0-0.jpg",
    "artists": ["Corazón Serrano"],
    "album": "En Vivo En Piura",
    "duration": "4:59"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "El Final De Este Amor",
    "image": "https://cdn-images.dzcdn.net/images/cover/2756b627e6f57482938e0835c2ba7b1a/500x500-000000-80-0-0.jpg",
    "artists": ["Corazón Serrano"],
    "album": "En Vivo En Piura",
    "duration": "4:12"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Volverás",
    "image": "https://cdn-images.dzcdn.net/images/cover/2756b627e6f57482938e0835c2ba7b1a/500x500-000000-80-0-0.jpg",
    "artists": ["Corazón Serrano"],
    "album": "En Vivo En Piura",
    "duration": "4:02"
  },
 /* {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },*/
  {
    "id": 1,
    "albumId": 5,
    "title": "Cumbia Amazonica",
    "image": "https://cdn-images.dzcdn.net/images/cover/15192a0323c6be0b2f2bd21479774c76/500x500-000000-80-0-0.jpg",
    "artists": ["Los Mirlos"],
    "album": "Cumbia Amazonica",
    "duration": "2:05"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "La Marcha del Pato",
    "image": "https://cdn-images.dzcdn.net/images/cover/15192a0323c6be0b2f2bd21479774c76/500x500-000000-80-0-0.jpg",
    "artists": ["Los Mirlos"],
    "album": "Cumbia Amazonica",
    "duration": "3:06"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "La Danza del Petroleo",
    "image": "https://cdn-images.dzcdn.net/images/cover/15192a0323c6be0b2f2bd21479774c76/500x500-000000-80-0-0.jpg",
    "artists": ["Los Mirlos"],
    "album": "Cumbia Amazonica",
    "duration": "3:46"
  },
  /*
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06"
  },*/
  {
    "id": 1,
    "albumId": 6,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54"
  },
]