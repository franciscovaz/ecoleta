import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="RecolhaECO" />
        </header>

        <main>
          <h1>O seu marketplace de recolha de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de recolha de forma eficiente.
          </p>

          <a href="/registo">
            <span>
              <FiLogIn />
            </span>
            <strong>Registe um ponto de recolha</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
