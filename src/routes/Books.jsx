import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from '../components/Form';
import Book from '../components/Book';
import '../css/books.css';
import {
  selectAllBooks,
  getBooksStatus,
  getBooksError,
  fetchBooks,
} from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const booksError = useSelector(getBooksError);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  let responseData;
  if (booksStatus === 'loading') {
    responseData = <p>Loading...</p>;
  } else if (booksStatus === 'succeeded') {
    responseData = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
      />
    ));
  } else if (booksStatus === 'failed') {
    responseData = <p>{booksError}</p>;
  }
  return (
    <div>
      <h1>List of books</h1>
      <ul>{responseData}</ul>
      <Form />
    </div>
  );
};

export default Books;
