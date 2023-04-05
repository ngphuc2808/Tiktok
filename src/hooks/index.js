import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line
  }, [value]);

  return debouncedValue;
};

useDebounce.propTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};
