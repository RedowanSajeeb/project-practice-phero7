// —------------------------

// প্রাকটিস চ্যালেঞ্জ-৩ টা:

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

// -----------

function leapYear(dateY){
    if(dateY % 4 == 0){
        console.log(dateY,"leapYaear-365days")
    }
    else{
        console.log(dateY,"no-no no leapYear")
    }
}
let datacaall = leapYear(2023);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
// ----------------

function evenOdd(EvenYer){
    if( EvenYer % 2 == 0){
        return true;
    }
    else{
        return false;
    }

}
let Consl= evenOdd(18);
console.log(Consl);

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
// --------------
 function Convert (time){
    let gonta = time * 600 ;
    return gonta;
 }
 let OutputTime = Convert (1);
 console.log(OutputTime,'mint');

//  -----------------------

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.
// -------------
function findarry (aray){
    let sumodd = 0;
    for ( let i= 0; i < aray.length; i++){
        if ( aray[i] % 2 !== 0){
            sumodd += aray[i]
        }
    }
    return sumodd;
}
const arrr = [5, 7, 8, 10, 45, 30];
const outputt = findarry(arrr);
console.log(outputt);


// ---------------Gaja

function findarry (aray){
    let sumodd = 0;
    for ( let i= 0; i < aray.length; i++){
        if ( aray[i] % 2 !== 0){
            sumodd += aray[i]
        }
    }
    return sumodd;
}
const arrr = [5, 7, 8, 10, 45,3,5, 30];
const outputt = findarry(arrr);
console.log(outputt);