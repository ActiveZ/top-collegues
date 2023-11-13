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

// results	
// 0	
  // name	
    // title	"Mr"
    // first	"Malone"
    // last	"Olivier"
  // login	
    // uuid	"9c11f239-5f79-4534-bead-45395327a9b3"
    // username	"blackkoala687"
    // password	"!:bgV7hW"
    // salt	"w0CMvmq0"
    // md5	"73d5fb6d78fb88f61e38331a717fec04"
    // sha1	"82cac7aabaf6c516bf0e672ce500571895266481"
    // sha256	"c7b0cabf0ce6451c7ce1b53eade18269a1f540eebb7ab97f92923235dca75112"
  // picture	
    // large	"https://randomuser.me/api/portraits/men/24.jpg"
    // medium	"https://randomuser.me/api/portraits/med/men/24.jpg"
    // thumbnail	"https://randomuser.me/api/portraits/thumb/men/24.jpg"
export interface randomUser {
  name: { title: string, first: string, last: string };
  login: { uuid: string, username: string; password: string, slat: string, md5: string, sha1: string, sha256: string };
  picture: { large: string, medium: string, thumbnail: string }
}

export interface Vote {
  collegue: Collegue;
  avis: Avis;
  score: Number;
  dateCreation: Date;
}
