import Form from '../components/Form';
import Book from '../components/Book';
import '../css/books.css';

const Books = () => {
  const books = [
    { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Dune', author: 'Frank Herbert' },
    { id: 3, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ];
  return (
    <div>
      <h1>List of books</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
