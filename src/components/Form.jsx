import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import AddButton from './AddButton';
import '../css/form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      category: 'Fiction',
      ...formInputs,
    };
    dispatch(addBook(newBook));
    setFormInputs({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setFormInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new book</h3>
      <div id="form-elements">
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            value={formInputs.title}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="author">
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={formInputs.author}
            onChange={handleChange}
            required
          />
        </label>
        <AddButton />
      </div>
    </form>
  );
};
export default Form;
