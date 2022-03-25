import React, { useState, useEffect } from 'react';

const getLocalStorageItems = (key, storedValues) => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : storedValues;
};

export const useLocaStorage = (key, storedValues) => {
  const [value, setvalue] = useState(() =>
    getLocalStorageItems(key, storedValues)
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, storedValues]);

  return [value, setvalue];
};
