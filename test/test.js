const address = {
  title: "Gomel",
};

let user = {
  name: "Tania",
  age: 34,
  address,
  hair: 30,
  laptop: {
    title: "Zenbook",
  },
  books: ["js", "python", "machine learning", "data science"],
  companies: [
    { id: 2, title: "Google" },
    { id: 4, title: "Dell" },
    { id: 10, title: "Tesla" },
  ],
};
function increaseAge(u) {
  u.age++;
}

let addr = user.address;

let user2 = {
  name: "Natasha",
  age: 30,
  address,
  hair: 50,
  laptop: {
    title: "Asus",
  },
};

let companies = {
  Tania: [
    { id: 2, title: "Google" },
    { id: 4, title: "Dell" },
    { id: 10, title: "Tesla" },
  ],
  Andrew: [
    { id: 90, title: "Epam" },
    { id: 46, title: "ItSupportsMe" },
    { id: 11, title: "Skolkovo" },
  ],
};

const updateAssociativeArray = (comps, userName, id, title) => {
  let copy = { ...comps };
  return copy[userName].map((el) => (el.id === id ? { ...el, title } : el));
};
console.log(
  "updated ass array: ",
  updateAssociativeArray(companies, "Tania", 4, "Red Rocket")
);
function changeAddress(u) {
  const userCopy = {
    ...u,
    address: {
      ...u.address,
      title: "Cairo",
    },
  };
  return userCopy;
}
const movedUser = changeAddress(user);
console.log("movedUser: ", movedUser);
console.log("user: ", user);

const superman = user;
superman.age = 1000;

let usersUnion = [user, user2, { name: "Misha", age: 7, address }];
let adminsUnion = [user, user2];

adminsUnion[0].name = "Tatiana";

let users = [
  {
    name: "Stas",
    age: 34,
  },
  {
    name: "Lena",
    age: 39,
  },
];

let admins = users;
admins[0].age = 200;
admins.push({ name: "Bangyugan", age: 10 });

let usersCount = 100;
let adminsCount = usersCount;

usersCount = 50;

let letters = ["c", "z", "s", "a", "k", "o"];

function sortLetters(data) {
  const sorted = [...data].sort();
  return sorted;
}

function upgradeUserLaptop(u, title) {
  return {
    ...u,
    laptop: {
      ...u.laptop,
      title,
    },
  };
}
const upgradedUserLaptopUser = upgradeUserLaptop(user, "Macbook");

function addNewBooksToUser(u, books) {
  return {
    ...u,
    books: [...u.books, ...books],
  };
}

const copiedWithBooks = addNewBooksToUser(user, ["Bible"]);

function updateBook(u, oldBook, newBook) {
  return {
    ...u,
    books: u.books.map((el) => (el === oldBook ? newBook : el)),
  };
}

const updatedUserWithBooks = updateBook(user, "python", "Stas");
console.log("update books: ", updatedUserWithBooks);

const removeBook = (u, book) => {
  return {
    ...u,
    books: u.books.filter((el) => el !== book),
  };
};

const removedBook = removeBook(updatedUserWithBooks, "Stas");
// console.log("removedBook: ", removedBook);

const addCompanyToUser = (u, company) => {
  return {
    ...u,
    companies: [...u.companies, company],
  };
};

const addedCompany = addCompanyToUser(user, { id: 17, title: "Amazon" });
// console.log("added company: ", addedCompany);

const updateCompanyTitle = (u, id, company) => {
  return {
    ...u,
    companies: u.companies.map((el) =>
      el.id === id ? { ...el, title: company } : el
    ),
  };
};
const updatedCompany = updateCompanyTitle(addedCompany, 4, "General Motors");
// console.log("updatedCompany: ", updatedCompany);
