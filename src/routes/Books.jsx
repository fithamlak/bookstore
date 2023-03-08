import { useSelector } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Book';
import '../css/books.css';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div>
      <h1>List of books</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
