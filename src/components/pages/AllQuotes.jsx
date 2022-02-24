import React from 'react';
import QuoteList from '../quotes/QuoteList';

// LECTURE USING CUSTOM HOOK AND CUSTOM FUNCTIONS INSIDE OF HOOK TO MAKE HTTP REQUESTS
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';
import { useEffect } from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';
import NoQuotesFound from '../quotes/NoQuotesFound';

const AllQuotes = () => {
  // LECTURE
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if ((status === 'completed' && !loadedQuotes) || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
