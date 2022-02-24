import HighlightedQuote from '../quotes/HighlightedQuote';
import { useNavigate, useParams } from 'react-router-dom';
import NoQuotesFound from '../quotes/NoQuotesFound';
import { useState, useEffect } from 'react';
// LECTURE
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  // LECTURE
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    // LECTURE getSingleQuote requests an argument which contains qouteId, which we get from useParams
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  const toggleCommentsHandler = () => {
    navigate(`/quotes/${loadedQuote.id}/${isActive ? 'comments' : ''}`);
    setIsActive(!isActive);
  };

  return (
    <HighlightedQuote
      text={loadedQuote.text}
      author={loadedQuote.author}
      onToggleHandler={toggleCommentsHandler}
      isActive={isActive}
    />
  );
};

export default QuoteDetail;
