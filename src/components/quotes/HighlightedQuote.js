import classes from './HighlightedQuote.module.css';
import { Link, Outlet } from 'react-router-dom';

const HighlightedQuote = ({ text, author, isActive, onToggleHandler }) => {
  return (
    <>
      <Link className="btn--flat" to="/quotes">
        Go Back
      </Link>
      <figure className={classes.quote}>
        <p>{text}</p>
        <figcaption>{author}</figcaption>
      </figure>
      <button className="btn--flat centered" onClick={onToggleHandler}>
        {isActive ? 'Show' : 'Hide'} comments
      </button>
      <Outlet />
    </>
  );
};

export default HighlightedQuote;
