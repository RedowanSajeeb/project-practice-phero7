// Practice Problem reduce()

/* 1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const people = [
    {name: 'Menna', age:20},
    {name: 'Rina', age:15},
    {name: 'Susmita', age:22},

];
    let summage = 0;
for (const elements of people){
    summage += elements.age;

}
// console.log(summage);

const peopleR = [
    {name: 'Menna', age:20},
    {name: 'Rina', age:15},
    {name: 'Susmita', age:22},

];
const reduceSumResult = peopleR.reduce((toralx , peopletx) => toralx + peopletx.age,0);
console.log(reduceSumResult);

// -----------
// Practice Problem: Access Object values

const student = {
    name:'fedi',
    age:26,
}
console.log(student.age);

// Practice Problem: Access Object values

let data = {
    Location:[
        {
            lattitul: '34.5 , 37.8',
            logtatoti: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India',
        }

    ]
};
console.log(data.Location[0].city);