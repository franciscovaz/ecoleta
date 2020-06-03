import React, { useState } from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = props => {
  const [counter, setCounter] = useState(0);

  function handleClickButton() {
    setCounter(counter + 1);
  }

  return (
    <header>
      <h1>{counter}</h1>
      <button type="button" onClick={handleClickButton}>
        Aumentar
      </button>
    </header>
  );
};

export default Header;
