type UserType = {
  name: string,
  email: string,
}

const displayData = (user: UserType) => {
  return `Nome:${user.name}, Email: ${user.email}`
}
const user1: UserType = {
  name:'...',
  email:'...',
  // adress:'...'
}
console.log(displayData(user1))