import React, {useState} from "react";

function Search( {onSearchSubmit} ) {
  const [searchText, setSearchText] = useState('')


  function handleSubmit(e) {
    e.preventDefault();
    //when the search is submitted it returns the value of searchText
    return onSearchSubmit(searchText)
  }
  
  console.log(searchText)
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
