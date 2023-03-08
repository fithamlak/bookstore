import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from '../components/Form';
import Book from '../components/Book';
import '../css/books.css';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => (store.books.ifSucceed));
  const books = useSelector((store) => store.books.books);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [ifSucceed, dispatch]);

  let responseData;
  if (isLoading) {
    responseData = <p>Loading...</p>;
  } else if (ifSucceed) {
    responseData = Object.keys(books).map((key) => {
      const currentBook = books[key][0];
      return (
        <Book
          key={key}
          id={key}
          title={currentBook.title}
          author={currentBook.author}
        />
      );
    });
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
