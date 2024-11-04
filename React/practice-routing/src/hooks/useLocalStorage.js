import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedItem = localStorage.getItem(key);

    return storedItem ? JSON.parse(storedItem) : defaultValue;
  });

  function setLocalStorage(newItem) {
    localStorage.setItem(key, JSON.stringify(newItem));

    setValue(newItem);
  }

  return [value, setLocalStorage];
}

export default useLocalStorage;
