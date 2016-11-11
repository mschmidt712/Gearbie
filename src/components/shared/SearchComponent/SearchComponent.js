import React from 'react';

/**
 * The search bar for finding gear
 */

function SearchComponent() {
  return (
    <div className="search-container">
      <label htmlFor="search" className="search-label">Search</label>
      <input type="text" placeholder="Find your gear." />
      <div className="button-container">
        <button>
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
