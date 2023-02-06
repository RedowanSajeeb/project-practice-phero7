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


            // ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
            // --------------

            function Namcase (sentence){
                console.log(sentence.toUpperCase());
            }
            Namcase("redowan-sajeeb")


            // -----------------
            