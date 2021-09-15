import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const dbUrl = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])
  const [isSearched, setIsSearched] = useState(false)
  const [filteredListings, setFilteredListings] = useState([])
  const [isSorted, setIsSorted] = useState(false)

  function createNewListing (listingObj) {
    fetch(dbUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listingObj)
    })
    .then(r => r.json())
    .then(listing => {
      const updatedListings = [...listings, listing]
      setListings(updatedListings)
    })
}

  const handleSort = () => setIsSorted(!isSorted)

  useEffect(() => {
    fetch(dbUrl)
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  function onSearchSubmit (searchText) {
    const filtered = listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))
    setIsSearched(true)
    setFilteredListings(filtered)
  }

  function handleDelete(id){
    fetch(dbUrl + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const updatedListings = listings.filter((listing) => listing.id !== parseInt(id, 10))
    setListings(updatedListings)
    setFilteredListings(updatedListings)
  }

  console.log('listings' , listings)
  return (
    <div className="app">
      <Header handleSort={handleSort} onSearchSubmit={onSearchSubmit} />
      <NewListingForm createNewListing={createNewListing} />
      <ListingsContainer handleDelete={handleDelete} listings={isSearched ? filteredListings : listings}
      isSorted={isSorted} />
    </div>
  );
}

export default App;
