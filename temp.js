const user = { id: 245, name: 'Masud' }
const userJSON = JSON.stringify(user);
// console.log(userJSON)
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON)