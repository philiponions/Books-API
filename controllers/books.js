
let books = [
    {
        title: "Sample Book",
        author: "Huey Gonzales",
        isbn: 123918230
      }
]

export const addBook = (req, res) => {    
    const book = req.body

    books.push(book)

    res.send(`Book: ${book.title} added to database.`)
}

export const deleteBook = (req, res) => {
    const { isbn } = req.params

    // if book is true, keep book in array
    // if false, remove it from array
    books = books.filter((book) => book.isbn != isbn)

    res.send(`Book ${isbn} deleted from database.`)
}

export const updateBook = (req, res) => {
    const { isbn } = req.params
    const {title , author} = req.body

    // book we found in db
    const book = books.find((book) => book.isbn == isbn)

    if(title) book.title = title

    if(author) book.author = author

    res.send(`book with isbn ${isbn} has been updated`)

}

export const getBook = (req, res) => {
    const { isbn } = req.params

    const foundBook = books.find((book) => book.isbn == isbn)
    console.log(foundBook)    

    res.send(foundBook)
}

export const getBooks = (req,res) => {
    
    
    console.log(books)

    res.send(books)
}