function generateToken(user) {
    console.log(user.nom);
    //const token = window.btoa(user.nom);
    const token = Buffer.from(user.nom).toString('base64');
    return token;
}

function verifyToken(token) {
    console.log(`Token à vérifier: ${token}`);
    //const token = window.btoa(user.nom);
    const user = Buffer.from(token, 'base64').toString('ascii');
    return user;
}

const user = {
    "prenom": "Charlie",
    "nom": "Dupont"
}

const token_genere = generateToken(user);
console.log(`Token : ${token_genere}`);
const user_verifie = verifyToken(token_genere);
console.log(`user verifie : ${user_verifie}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];

function rechercheUsers(users, lettre) {
    return users.filter(user => {
        return user.nom.includes(lettre);
    });
}

function filtreAgeUsers(users, age) {
    return users.filter(user => {
        return user.age > age;
    });
}

const UserAvecO = rechercheUsers(users, "o");
const UserOver28Ans = filtreAgeUsers(users, 28);
console.log("users avec la lettre o : ", UserAvecO);
console.log("users plus agé que 28 ans : ", UserOver28Ans);
