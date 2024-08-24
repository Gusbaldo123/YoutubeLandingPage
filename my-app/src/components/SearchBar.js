import React from "react";

function SearchBar()
{
  return (
    <div className="searchBar">
      <input type="text" className="searchBarInput" placeholder="Pesquisar"/><button className="searchBarButton">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path clip-rule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909ZM18 11a7 7 0 11-14 0 7 7 0 0114 0Z" fill-rule="evenodd"></path></svg>
      </button>
    </div>
  );
}

export default SearchBar;