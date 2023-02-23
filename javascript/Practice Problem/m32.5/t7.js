/* 7) How will you display
a) habluder adda
b) Beginner */

let data = {
  data: [
    {
      bookId: 1,
      bookDetails: { name: "habluder adda", category: "XYZ", price: "20$" },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};
const habluderAddb = data.data[1].bookDetails.name;

const habluderAdd = data.data[1].bookCategory;
console.log(habluderAdd);

console.log(habluderAddb);
