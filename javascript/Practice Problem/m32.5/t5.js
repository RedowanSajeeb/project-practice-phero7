/* 5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh */

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming ercoddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};
const des = instructor.additionalData.books[1];
const des2 = instructor.additionalData.moreDetails.hometown.state;
const des3 = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(des);
console.log(des2);
console.log(des3);
