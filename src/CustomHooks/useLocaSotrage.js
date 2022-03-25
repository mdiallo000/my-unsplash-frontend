import React, { useState, useEffect } from 'react';

const getLocalStorageItems = (key, storedValues) => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : storedValues;
};
