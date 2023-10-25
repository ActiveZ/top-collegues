export interface Collegue {
  pseudo: string;
  nom: string;
  prenom: string;
  photo: string;
  score: number;
}

export enum avis {
  AIME = 'AIMER',
  DETESTE = 'DETESTER',
}

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

// version randomuser à faire:
// https://randomuser.me/api/?inc=name,login,picture&nat=fr&password=upper,lower,number,special,8&noinfo
export interface randomUser {
  name: { first: string; last: string };
  login: { username: string; password: string };
  picture: { large: string }
}

export interface Vote {
  collegue: Collegue;
  avis: avis;
  score: Number;
  dateCreation: Date;
}
