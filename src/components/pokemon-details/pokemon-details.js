import React from 'react';
import { Progress, Modal } from 'antd';
import PokemonTypeList from '../pokemon-type-list';
import ErrorBoundary from '../error-boundary';
import './styles.sass';
import icon from '../../images/pokeball.png';

const PokemonDetails = ({
  pokemonDetails: {
    name,
    id,
    sprites,
    abilities,
    stats,
    weight,
    height,
    types
  },
  showModal,
  hideModal,
  error
}) => {
  const img =
    sprites && sprites.front_default ? (
      <img src={sprites.front_default} alt={name} title={name} />
    ) : (
      <img src={icon} alt={name} title={name} />
    );
  const pokemonAbilities = abilities && (
    <div className='abilities'>
      <p>
        <strong>Abilities: </strong>
      </p>
      <ul className='list'>
        {abilities.map((item, idx) => (
          <li key={idx}>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
  const pokemonStats = stats && (
    <div className='stats'>
      <p>
        <strong>Stats: </strong>
      </p>
      <ul className='list'>
        {stats.map((item, idx) => (
          <li key={idx}>
            <span>{item.stat.name}</span>
            <Progress
              format={() => item.base_stat}
              percent={item.base_stat}
              strokeWidth={12}
            />
          </li>
        ))}
      </ul>
    </div>
  );
  const pokemonId = id && <span className='id'>{id}</span>;
  const pokemonHeight = height * 10;
  const pokemonWeight = (weight * 0.1).toFixed(1);

  return (
    <Modal visible={showModal} onCancel={hideModal} centered width={600}>
      <ErrorBoundary error={error} pokemonName={name}>
        <div className='info'>
          <div className='info_top'>
            {pokemonId}
            <div className='info_img'>{img}</div>
            <div className='info_top_content'>
              <div className='info_title'>{name}</div>
              <p>
                <strong>Height: </strong> {pokemonHeight} cm
              </p>
              <p>
                <strong>Weight: </strong> {pokemonWeight} kg
              </p>
              <PokemonTypeList types={types} />
              <div className='info_abilities'>{pokemonAbilities}</div>
            </div>
          </div>
          <div className='info_stats'>{pokemonStats}</div>
        </div>
      </ErrorBoundary>
    </Modal>
  );
};

export default PokemonDetails;
