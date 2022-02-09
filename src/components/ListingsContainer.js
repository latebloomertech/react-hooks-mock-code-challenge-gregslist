import React from "react";
import ListingCard from "./ListingCard"


function ListingsContainer({items, handleDelete}) {

return (
    <main>
      <ul className="cards">
        {items.map(item => (
        <ListingCard
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          />
        ))};
      </ul>
    </main>
  );
}

export default ListingsContainer;
