import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import PokemonTypeList from '../pokemon-type-list';
import './styles.sass';
import icon from '../../images/pokeball.png';

const PokemonItem = ({ item: { name, url }, handleClick }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchDataPokemon = async url => {
      await axios
        .get(url)
        .then(response => setPokemon(response.data))
        .catch(error => error.response && console.log(error.response));
    };

    fetchDataPokemon(url);
  }, [url]);

  const { id, abilities, sprites, types, stats } = pokemon;
  const img =
    sprites && sprites.front_default ? (
      <img src={sprites.front_default} alt={name} title={name} />
    ) : (
      <img src={icon} alt={name} title={name} />
    );
  const pokemonAbilities = abilities && (
    <div className='abilities'>
      <p>Abilities: </p>
      <ul className='list'>
        {abilities.map((item, idx) => (
          <li key={idx}>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
  const pokemonStats = stats && (
    <div className='stats'>
      <p>Stats: </p>
      <ul className='list'>
        {stats.map((item, idx) => (
          <li key={idx}>{`${item.stat.name} - ${item.base_stat} `}</li>
        ))}
      </ul>
    </div>
  );

  const pokemonId = id && <span className='id'>{id}</span>;

  return (
    <>
      {pokemon && (
        <Card hoverable onClick={() => handleClick(name)} cover={img}>
          {pokemonId}
          <Card.Meta title={name} />
          <PokemonTypeList types={types} />
          {pokemonAbilities}
          {pokemonStats}
        </Card>
      )}
    </>
  );
};

export default PokemonItem;
