import React, { useState, useEffect } from 'react';


const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  useEffect(() => {
    document.body.className = isLightTheme ? 'light-theme' : 'dark-theme';
  }, [isLightTheme]);

  return (
    <div>
      <h1></h1>
      <button onClick={toggleTheme}>
        Switch to {isLightTheme ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
