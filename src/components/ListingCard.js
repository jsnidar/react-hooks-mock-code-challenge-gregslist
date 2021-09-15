import React, {useState} from "react";

function ListingCard( {listing, handleDelete}) {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <li id={listing.id}className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={() => setIsLiked(!isLiked)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsLiked(!isLiked)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={(e) => handleDelete(e.target.parentNode.parentNode.id, listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
