import React from 'react';
import { Input } from 'antd';
import './styles.sass';

const PokemonSearch = ({ handleClick }) => {
  const { Search } = Input;

  return (
    <div className='search'>
      <Search
        placeholder='Search Pokemon'
        onSearch={value => value && handleClick(value)}
        enterButton
      />
    </div>
  );
};

export default PokemonSearch;
