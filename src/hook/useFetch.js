import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const { data, isLoading, errors } = state;

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  // para poder llamar a una función asíncrona se utiliza useEffect, para evitar bucles infinitos
  // cuando cambie la dependencia, en este caso la url, se ejecutará la función getFetch
  useEffect(() => {
    if (!url) {
      return;
    }
    getFetch();
  }, [url]);

  return {
    data,
    isLoading,
    errors,
  };
};
