// 1
const cngdHoyaNah = "redowan";
let wather = "50dc";

// 2
const boj = {
    name:"redo1",
    secName:'sajeeb2'
}
 const tmString = `
  First Pershon Name ${cngdHoyaNah} Done Wather ${wather} and obj ${boj.name.boj} && ${boj.secName}
 `
 console.log(tmString);

// 3.1

const arrayF5 = (x) => x /5;
console.log(arrayF5(25));

// 3.2
const array2paramiterFunction = (x,y) => {
    const x2 = x + y + 4;
    return  x2*2
}
console.log(array2paramiterFunction(5,2));

// 3.3

// const p3Paramiter = (x,y,z) => {
//     return x*y*z
// }
const p3Paramiter = (x,y,z) => x*y*z;
console.log(p3Paramiter(5,5,5));

// 3.4

const abar2p = (c,b) =>{
    const First1  = c + 2;
    const sec2 = b+2
    const result = First1 + sec2;
    return result*2

}
console.log(abar2p(2,2));

// 4

/* 5-Differences Between Arrow and Regular Functions */
// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?

// 5

const onakGulanArray = [5,6,7,8,9,10,15,50,100].map(x => x*5);
console.log(onakGulanArray);