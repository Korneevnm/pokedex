import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import PokemonList from '../pokemon-list';
import './styles.sass';

const IndexPage = ({ handleClick }) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(10);

  const url = 'https://pokeapi.co/api/v2/';

  useEffect(() => {
    const fetchData = async (limit, offset) => {
      await axios
        .get(`${url}pokemon/?limit=${limit}&offset=${offset}/`)
        .then(response => {
          setPokemons(response.data.results);
          setCount(response.data.count);
        })
        .catch(error => error.response);
    };

    fetchData(limit, offset);
  }, [limit, offset]);

  return (
    <>
      <PokemonList pokemons={pokemons} handleClick={handleClick} />

      <Pagination
        total={count}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} pokemons`
        }
        showTitle={false}
        pageSize={limit}
        pageSizeOptions={['10', '20', '50']}
        showQuickJumper
        showSizeChanger
        onShowSizeChange={(current, pageSize) => {
          setLimit(pageSize);
          setOffset((current - 1) * pageSize);
        }}
        onChange={page => {
          if (page === 1) {
            setOffset(0);
          }
          setOffset((page - 1) * limit);
        }}
      />
    </>
  );
};

export default IndexPage;
