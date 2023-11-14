// fichier js pour node

const fs = require("fs");
const target = "./db_collegues.json";
const randomUserUrl =
  "https://randomuser.me/api/?inc=name,login,picture&nat=fr&password=upper,lower,number,special,8&results=5&noinfo";

const getData = async () => {
  const res = await fetch(randomUserUrl);
  const data = await res.json();

  db_json = {}
  collegues = [];
  results = data["results"];
  results.forEach((person) => {
    user = {
      id: person.login.uuid,
      prenom: person.name.first,
      nom: person.name.last,
      pseudo: person.login.username,
      photo: person.picture.large,
      score: 0,
    };
    collegues.push(user);
  });

  db_json = {"collegues": collegues, "votes": []}

  fs.writeFile(target, JSON.stringify(db_json), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Fichier " + target + " créé !");
  });
};

getData();
