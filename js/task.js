import users from "./users.js";

/*Task 1
Получить массив имен всех пользователей (поле name).*/

console.log("Task 1");
const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*Task 2
Получить массив объектов пользователей по цвету глаз (поле eyeColor).*/

console.log("Task 2");
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*Task 3
Получить массив имен пользователей по полу (поле gender).*/

console.log("Task 3");
const getUsersWithGender = (users, gender) => {
  const genderedUser = users.filter((user) => user.gender === gender);
  return genderedUser.map((user) => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*Task 4
Получить массив только неактивных пользователей (поле isActive).*/

console.log("Task 4");
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*Task 5
Получить пользоваля (не массив) по email (поле email, он уникальный).*/

console.log("Task 5");
const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

/*Task 6
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).*/

console.log("Task 6");
const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*Task 7
Получить общую сумму баланса (поле balance) всех пользователей.*/

console.log("Task 7");
const calculateTotalBalance = (users) =>
  users.reduce((totalSum, user) => totalSum + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

/*Task 8
Массив имен всех пользователей у которых есть друг с указанным именем.*/

console.log("Task 8");
const getUsersWithFriend = (users, friendName) => {
  const haveFriendArray = users.filter((user) =>
    user.friends.includes(friendName)
  );
  return haveFriendArray.map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

/*Task 9
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)*/

console.log("Task 9");
const getNamesSortedByFriendsCount = (users) => {
  const sortByFriends = (a, b) => a.friends.length - b.friends.length;
  return users.sort(sortByFriends);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*Task 10
Получить массив всех умений всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и они должны 
быть отсортированы в алфавитном порядке.*/

console.log("Task 10");
const getSortedUniqueSkills = (users) => {
  const allSkills = [];
  users.map((user) => user.skills).forEach((skill) => allSkills.push(...skill));
  return allSkills
    .filter((skill, index, array) => index === array.indexOf(skill))
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
