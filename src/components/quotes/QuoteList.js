import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

// TODO copied sorting function
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  // LECTURE QUERY PARAMS
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';

  // TODO sorting - passing quotes iz propsa, i true or false depend on asc or descending order
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  console.log(props.quotes);

  const changeSortingHandler = () => {
    navigate(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  };
  return (
    <>
      <div className={classes.sorting}>
        {/* LECTURE ako search je trenutno ascending onda button treba da pokazuje descending */}
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {/* TODO ovde prosledimo sorted quotes umesto obicnih  */}
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
