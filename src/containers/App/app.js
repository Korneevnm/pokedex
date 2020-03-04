import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PokemonDetails from '../../components/pokemon-details';
import Header from '../../components/header';
import { IndexPage, TypesPage } from '../../components/pages';
import './styles.sass';

const App = () => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://pokeapi.co/api/v2/';

  const handleClick = async value => {
    await axios
      .get(`${url}pokemon/${value}/`)
      .then(response => {
        setPokemonDetails(response.data);
        setError(null);
      })
      .catch(error => setError(error.response));
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className='container'>
      <Router>
        <Header handleClick={handleClick} />

        <Switch>
          <Route path='/' exact>
            <IndexPage handleClick={handleClick} />
          </Route>
          <Route path='/types'>
            <TypesPage handleClick={handleClick} />
          </Route>
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>

      <PokemonDetails
        pokemonDetails={pokemonDetails}
        showModal={showModal}
        hideModal={hideModal}
        error={error && error}
      />
    </div>
  );
};

export default App;
