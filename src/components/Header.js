import React from "react";
import Search from "./Search";
import SortButton from "./SortButton";

function Header( {onSearchSubmit, handleSort} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
      <SortButton handleSort={handleSort} />
    </header>
  );
}

export default Header;
