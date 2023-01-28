// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.
// --------------------
var MyScore = 85;
var TomScore = 66;
var JaneScore = 95;
var PeterScore = 56;
var JohanScore = 40;

var gradeA = 80, gradeB = 60; gradeC = 50; gradeD = 40; gradeF = 39;

if (MyScore >= gradeA){
    console.log('GPA- @+');
}
else if(MyScore >= 60){
    console.log('GPA- B+');
}
else if(MyScore >= 50){
    console.log('GPA- C+');
}
else if(MyScore >= 40){
    console.log('GPA- D+');
}
else if(MyScore <= 39){
    console.log('GPA- f+');
}
// 2--------------------------------------------------------
if (TomScore >= gradeA){
    console.log('GPA- @+');
}
else if(TomScore >= 60){
    console.log('GPA- B+');
}
else if(TomScore >= 50){
    console.log('GPA- C+');
}
else if(TomScore >= 40){
    console.log('GPA- D+');
}
else if(TomScore <= 39){
    console.log('GPA- f+');
}
// 3----------------------------------------------------------------
if (JaneScore >= gradeA){
    console.log('GPA- @+');
}
else if(JaneScore >= 60){
    console.log('GPA- B+');
}
else if(JaneScore >= 50){
    console.log('GPA- C+');
}
else if(JaneScore >= 40){
    console.log('GPA- D+');
}
else if(JaneScore <= 39){
    console.log('GPA- f+');
}
// 4-----------------------------------------------------------
if (PeterScore >= gradeA){
    console.log('GPA- @+');
}
else if(PeterScore >= 60){
    console.log('GPA- B+');
}
else if(PeterScore >= 50){
    console.log('GPA- C+');
}
else if(PeterScore >= 40){
    console.log('GPA- D+');
}
else if(PeterScore <= 39){
    console.log('GPA- f+');
}
// 5----------------------------------
if (JohanScore >= gradeA){
    console.log('GPA- @+');
}
else if(JohanScore >= 60){
    console.log('GPA- B+');
}
else if(JohanScore >= 50){
    console.log('GPA- C+');
}
else if(JaneScore >= 40){
    console.log('GPA- D+');
}
else if(JohanScore <= 39){
    console.log('GPA- f+');
}