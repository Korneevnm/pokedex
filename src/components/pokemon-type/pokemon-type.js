import React, { useState } from 'react';
import { Tag } from 'antd';
import './styles.sass';

const COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '82351D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

const PokemonTypeList = ({ name, onClickType }) => {
  const [checked, setChecked] = useState(false);
  const { CheckableTag } = Tag;

  if (onClickType) {
    return (
      <CheckableTag
        style={{
          backgroundColor: `#${COLORS[name]}`
        }}
        checked={checked}
        onChange={checked => {
          setChecked(checked);
          onClickType(name);
        }}>
        {name}
      </CheckableTag>
    );
  } else {
    return (
      <Tag
        style={{
          backgroundColor: `#${COLORS[name]}`
        }}>
        {name}
      </Tag>
    );
  }
};

export default PokemonTypeList;
