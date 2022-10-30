import { useState } from 'react';
import PropTypes from 'prop-types';
export const SearchBar = ({ submitted }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    submitted(searchQuery);
    reset();
  };
  const reset = () => {
    setSearchQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>
        <input
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          value={searchQuery}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  submitted: PropTypes.func.isRequired,
};
