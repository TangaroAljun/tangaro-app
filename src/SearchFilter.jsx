import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search citizens..."
      />
    </div>
  );
};

export default SearchFilter;
