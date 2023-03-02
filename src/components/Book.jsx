import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    {title}
    <br />
    {author}
    <button type="button"> Remove </button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
