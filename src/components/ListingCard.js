import React, {useState} from "react";

function ListingCard({item, handleDelete}) {
  const {id, description, image, location} = item
  const [isLiked, setIsLiked] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => handleDelete(item))
  }

  function toggleStar() {
      setIsLiked((isLiked) => !isLiked)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={toggleStar}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
