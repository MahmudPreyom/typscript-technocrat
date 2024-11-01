// Destructuring in typescript
// {
const user = {
    id: 345,
    name: {
        firstName: "Abdullah",
        middleName: "Al",
        lastName: 'Mahmud'
    },
    contactNo: "012345678901",
    address: "Uganda"
};

const {
    contactNo, name: { middleName }
} = user;


const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;
// }