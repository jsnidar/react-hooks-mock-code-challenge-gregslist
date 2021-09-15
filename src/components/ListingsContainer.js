import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, handleDelete, isSorted}) {
  
  const sortListings = () => {
    if(isSorted) {
      const sortedListings = [...listings]
      sortedListings.sort(function(a,b) {
        const locationA = a.location.toUpperCase();
        const locationB = b.location.toUpperCase();
        if(locationA < locationB) {
          return -1;
        }
        if(locationA > locationB) {
          return 1;
        }
        return 0;
      })
      return sortedListings;
    }else{
      const sortedListings = listings
      return sortedListings;
    }
  }
  const createCards = sortListings().map(listing => <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete} />)
  return (
    <main>
      <ul className="cards">
        {createCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
