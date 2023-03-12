
//------------- handle search button-----------
const searchBook = (a) => {

  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  if(searchText === ""){
    return alert("search field can not be empty")
  }
// console.log("dd");
  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data));
    
    
};


// ----------display search result data----------

const displaySearchResult = (myBooks) => {

  if(myBooks.numFound  === 0){
    return alert("write the correct book name")
  }
  document.getElementById("search-data").innerText =""
  const searchResult = document.getElementById("search-data");
  searchResult.innerText = "";
  document.getElementById("search-input").value =""


  const books = myBooks.docs;
  books.forEach((book) => {
    // console.log(book);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name}</h6>
              <p>Publisher: <small> ${book.publisher[0]} </small></p>
              <small> First Published Year: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
