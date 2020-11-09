import React, { useState } from 'react';

export const SearchBox = () => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='searchbox'>
      <label for='searchbox'>Input</label>
      <input
        type='text'
        id='inputbox'
        className='searchbox'
        value={input}
        placeholder='Enter Phrase'
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='button'
        id='searchBtn'
        className='searchbox'
        onClick={() => {
          setSearchTerm(input)
          setInput('')
        }}
      >
        Search
      </button>
      <div className='searchTermDisplay'>
        <p>Your current search is:</p>
        <span>{searchTerm}</span>
      </div>
    </div>
  );
};
