import React from 'react';
import PokemonType from '../pokemon-type';
import './styles.sass';

const PokemonTypeList = ({ types, onClickType, checkedd }) => {
  return (
    <div className='types'>
      <p>Types:</p>
      {types &&
        types.map(type => {
          let typeName;

          if (type.name) {
            typeName = type.name;
            return (
              <PokemonType
                key={typeName}
                name={typeName}
                onClickType={onClickType}>
                {typeName}
              </PokemonType>
            );
          } else {
            typeName = type.type.name;
            return (
              <PokemonType key={typeName} name={typeName}>
                {typeName}
              </PokemonType>
            );
          }
        })}
    </div>
  );
};

export default PokemonTypeList;
