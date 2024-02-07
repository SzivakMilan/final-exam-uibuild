console.log(books)

const rootElement = document.querySelector("#root")

books.forEach((books, index) => rootElement.insertAdjacentHTML("beforeend",`
    <div class="books">
    <h2>${books.sub}</h2>
    <p>${books.title}</p>
    <div class="text">${books.text}</div>
    <div class="number">${index + 1}<?div>
    <button>read more<?button>
    </div>
` ))