"use strict";
const displayData = (user) => {
    return `Nome:${user.name}, Email: ${user.email}`;
};
const user1 = {
    name: '...',
    email: '...',
    // adress:'...'
};
console.log(displayData(user1));
