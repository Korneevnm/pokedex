import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../pokemon-list';
import PokemonTypeList from '../pokemon-type-list';
import './styles.sass';

const TypesPage = ({ handleClick }) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const typesList = [
    { name: 'fire' },
    { name: 'water' },
    { name: 'ice' },
    { name: 'dragon' },
    { name: 'fighting' },
    { name: 'flying' },
    { name: 'grass' },
    { name: 'rock' },
    { name: 'fairy' },
    { name: 'poison' },
    { name: 'dark' },
    { name: 'ghost' },
    { name: 'electric' },
    { name: 'steel' },
    { name: 'bug' },
    { name: 'normal' },
    { name: 'psychic' }
  ];

  const url = 'https://pokeapi.co/api/v2/';

  useEffect(() => {
    const fetchDataType = async types => {
      await axios
        .all(types.map(type => axios.get(`${url}type/${type}`)))
        .then(response => {
          const data = response.map(poke => poke.data.pokemon);
          const list = [];
          data.map(item =>
            item.map(({ pokemon }) => {
              const id = pokemon.url.match(/\/([0-9]*)\/$/)[1];
              pokemon['id'] = id;
              const index = list.findIndex(item => item.id === pokemon.id);
              if (index === -1) {
                return list.push(pokemon);
              }
            })
          );
          setPokemons(list);
        })
        .catch(error => error.response);
    };

    types && fetchDataType(types);
  }, [types]);

  const onClickType = type => {
    if (!types.includes(type)) {
      setTypes([...types, type]);
    } else {
      setTypes(types.filter(item => item !== type));
    }
  };

  return (
    <div className='types_page'>
      <PokemonTypeList types={typesList} onClickType={onClickType} />
      {pokemons.length ? (
        <>
          <p>Pokemons types selected: {types.join(', ')}</p>
          <p>Pokemons displayed: {pokemons.length}</p>
          <PokemonList pokemons={pokemons} handleClick={handleClick} />
        </>
      ) : (
        <p>Choose one or more types</p>
      )}
    </div>
  );
};

export default TypesPage;
