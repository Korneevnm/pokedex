import React from 'react';
import { AutoComplete } from 'antd';
import './styles.sass';

import names from '../../utils/names';

const PokemonSearch = ({ handleClick }) => {
  return (
    <div className='search'>
      <AutoComplete
        options={names}
        placeholder='Search Pokemon'
        allowClear={true}
        onSelect={value => handleClick(value)}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().includes(inputValue.toUpperCase())
        }
      />
    </div>
  );
};

export default PokemonSearch;
