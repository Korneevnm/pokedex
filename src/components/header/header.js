import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import PokemonSearch from '../../components/pokemon-search';
import './styles.sass';

const Header = ({ handleClick }) => {
  const { Title } = Typography;

  return (
    <div className='header'>
      <Title>Pokedex</Title>
      <div className='menu'>
        <NavLink to='/pokedex' activeClassName=''>
          Home
        </NavLink>
        <NavLink to='/pokedex/types'>Types</NavLink>
      </div>
      <PokemonSearch handleClick={handleClick} />
    </div>
  );
};

export default Header;
