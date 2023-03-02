import PropTypes from 'prop-types';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, author } = props;

  return (
    <li>
      {title}
      <br />
      {author}
    </li>
  );
};

Book.defaultProps = {
  title: '',
  author: '',
};

Book.prototype = {
  title: PropTypes.string,
  author: PropTypes.string,
};
export default Book;
