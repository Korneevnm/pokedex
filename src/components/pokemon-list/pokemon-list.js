import React from 'react';
import PokemonItem from '../pokemon-item';
import './styles.sass';

const PokemonList = ({ pokemons, handleClick }) => {
  return (
    <>
      <div className='pokemon-list'>
        {pokemons &&
          pokemons.map(item => {
            let id;
            if (item.pokemon) {
              id = item.pokemon.url.match(/\/([0-9]*)\/$/)[1];
              item = item.pokemon;
            } else id = item.url.match(/\/([0-9]*)\/$/)[1];

            return (
              <PokemonItem
                key={id}
                item={item}
                pokemons={pokemons}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </>
  );
};

export default PokemonList;
