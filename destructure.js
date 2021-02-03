const person = {name: "jack William", age: 17, job: "facebooker", gfName: "Ema Wat", address: "Kochu Khet", phone: 0177112233, friends: [ 'tom hancks', 'tom cruise', 'tom yan']};
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);

// const {phone} = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);

// const {phone, gfName, salary, address} = person;
// console.log(phone, gfName, salary, address);

// const friends = ["Zia", "Hossain", "Mizan", "Rajo"];
// const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(chotoFriend, nextFriend);
// console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address : "kola bagan",
        leader: "Tiger Leader"
    }
}
const {leader} = complexObject.info;
console.log(leader);