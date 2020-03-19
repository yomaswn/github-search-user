import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
const Search = ({ setAlert }) => {
  const [text, setText] = useState('');

  const githubContext = useContext(GithubContext);

  const { searchUsers, clearUsers, users } = githubContext;

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form action='' className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='search user...'
          onChange={onChange}
          value={text}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
