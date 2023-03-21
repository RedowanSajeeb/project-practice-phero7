const imgArray = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg",
];
const imgurl = document.getElementById("slider-img");
let count = 0;
setInterval(() => {
  if (count === imgArray.length) {
    count = 0;
  }
  const imgurl2 = imgArray[count];
  imgurl.setAttribute("src", imgurl2);

  count++;
}, 1000);
