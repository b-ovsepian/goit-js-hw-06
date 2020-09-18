// ===================== ADDITIONAL ========================== //
// Данно масив з обєктами. Виконати всі поставлені задачі використовуючи функціональні методи масивів

const arr = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
];

// == task-1 == //
// отримати масив вчених що народилися в 19 ст
const getNames19 = (users) =>
  users.filter((user) => user.born > 1800 && user.born < 1900);
console.table(getNames19(arr));
// == task-2 == //
// знайти суму років скільки прожили всі вченні
const getTotalYears = (users) =>
  users.reduce((acc, user) => acc + (user.dead - user.born), 0);
console.log(getTotalYears(arr));
// == task-3 == //
// Відсортувати вчених по алфавіту
const sortFn = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
const sortByNames = (users) => users.sort(sortFn);
console.table(sortByNames(arr));
// == task-4 == //
// Відсортувати вчених по кількості прожитих років
const sortYear = (first, second) => {
  a = first.dead - first.born;
  b = second.dead - second.born;
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
const sortByYear = (users) => users.sort(sortYear);
console.table(sortByYear(arr));
// == task-4 == //
// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
const getNamesDelete = (users) =>
  users.filter(
    (user) =>
      !(
        Math.ceil(user.born / 100) === 17 ||
        Math.ceil(user.born / 100) === 16 ||
        Math.ceil(user.born / 100) === 15
      )
  );
console.table(getNamesDelete(arr));
// == task-5 == //
// Знайти вченого який народився найпізніше.
const sortLastBorn = (first, second) => {
  a = first.born;
  b = second.born;
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
const sortByLastYear = (users) =>
  users
    .sort(sortLastBorn)
    .find((user, index, array) => index === array.length - 1);

console.log(sortByLastYear(arr));
// == task-6 == //
// Знайти рік народження Albert Einstein
const getBornAlbert = (users) =>
  users.find((user) => user.name === "Albert" && user.surname === "Einstein")
    .born;
console.table(getBornAlbert(arr));
// == task-7 == //
// знайти вчених прізвище яких починається на літеру С
const getNamesByC = (users) => users.filter((user) => user.surname[0] === "C");
console.table(getNamesByC(arr));
// == task-8 == //
// Видалити з масива всіх вчених імя яких починається на A
const getNamesByA = (users) => users.filter((user) => !(user.name[0] === "A"));
console.table(getNamesByA(arr));
// == task-9 == //
// Знайти вченого який прожив найбільше і вченого який прожив найменьше
const sortByYearsCount = (users) =>
  sortByYear(users).filter(
    (user, index, array) => index === 0 || index === array.length - 1
  );
console.table(sortByYearsCount(arr));
// == task-10 == //
// Знайти вчених в яких співпадають перші літери імені і прізвища
const getNamesLetter = (users) =>
  users.filter((user) => user.surname[0] === user.name[0]);
console.table(getNamesLetter(arr));
// == task-11 == //
const isAllWork19 = (users) =>
  // Дізнатися чи всі вченні працювали в 19 столітті
  users.every((user) => Math.ceil(user.born / 100) === 19);
console.table(isAllWork19(arr));
