

//comment box 
const post = document.getElementById("post");
post.addEventListener("click", function () {
  let commentBoxValue = document.getElementById("comment-box").value;

  let li = document.createElement("li");
  let text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);

});
//alert review 
post.addEventListener("click", ()=>alert('thanks for your review!'))

//collapsible content

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






//Render One book
function renderOneBook(book) {
  //Build necessary book details details
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <div class="container">
  <div class = 'content'>
  <h3> ${book.title} </h3>
  <p>${book.url} <p>
  <p> ${book.author} </p>
  </div>
  </div>`
  document.querySelector('#book-list').appendChild(card) 
}



//fetch furniture data
function getAllBooks() {
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(bookData => bookData.furniture.forEach(book => renderOneBook(book)))
  .catch(err => console.error(err));
}

function initialize () {
  getAllBooks()
}
initialize()




