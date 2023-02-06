// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
let n = 13;
    for (let i = 1; i <= 10; ++i)
        console.log(n + " * " + i +
            " = " + n * i);
            // -----------------
            


            function NamtaFuntion (namta){
                for ( let i = 1; i <= 10; i++){
                    console.log(namta*i);
                }
            }
            NamtaFuntion(13);