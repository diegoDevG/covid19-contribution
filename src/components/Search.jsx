import React, { useContext } from 'react';
import searchIcon from '../assets/img/icons8-búsqueda-24.png';
import { QueryContext } from './../utilities/QueryContext';

const Search = () => {
  const { value, setValue } = useContext(QueryContext);

  return (
    <div className='bg-white p-2 pl-4 rounded-full flex items-center cursor-pointer md:w-4/12'>
      <input
        type='text'
        className='outline-none text-xl text-gray-600 w-full'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <img className='h-6' src={searchIcon} alt='' />
    </div>
  );
};

export default Search;
