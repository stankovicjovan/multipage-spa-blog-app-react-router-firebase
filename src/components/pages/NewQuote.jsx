import React from 'react';
import QuoteForm from '../quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// LECTURE USING CUSTOM HOOK AND CUSTOM FUNCTIONS INSIDE OF HOOK TO MAKE HTTP REQUESTS
import useHttp from '../../hooks/use-http';
import { addQuote } from '../../lib/api';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const navigate = useNavigate();

  // LECTURE
  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate]);

  const addQuoteHandler = quoteData => {
    // LECTURE
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
