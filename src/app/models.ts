/**
{
  "collegue": {
    "pseudo": "marie44",
    "nom": "TOURNIER",
    "prenom": "Marie",
    "photo": "https://randomuser.me/api/portraits/men/70.jpg",
    "score": 800
  },
  "avis": "AIMER",
  "score": 800,
  "dateCreation": "2022-02-10T22:39:19.706827Z"
},
 */
export interface Collegue {
  id: string;
  pseudo: string;
  nom: string;
  prenom: string;
  photo: string;
  score: number;
}

export enum Avis {
  AIME = 'AIMER',
  DETESTE = 'DETESTER',
}
export interface Vote {
  collegue: Collegue;
  avis: Avis;
  score: Number;
  dateCreation: Date;
}

// export interface randomUser {
//   name: { title: string, first: string, last: string };
//   login: { uuid: string, username: string; password: string, slat: string, md5: string, sha1: string, sha256: string };
//   picture: { large: string, medium: string, thumbnail: string }
// }
