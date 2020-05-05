import React, { Component } from "react";
import ItemCard from "./common/itemCard";

class ItemList extends Component {
  state = {
    item: [
      {
        id: 1,
        title: "banana",
        productWeight: "8pc(s)",
        productPrice: "$10",
        path: "/images/bananas.jpg",
        titleClass: "item-title",
      },
      {
        id: 2,
        title: "Onion",
        productWeight: "8pc(s)",
        productPrice: "$6",
        path: "/images/onion.jpg",
      },
      {
        id: 3,
        title: "Grapes",
        productWeight: "5pc(s)",
        productPrice: "$15",
        path: "/images/grapes.jpg",
      },
      {
        id: 4,
        title: "Coconut",
        productWeight: "10pc(s)",
        productPrice: "$7",
        path: "/images/coconut.jpg",
      },
      {
        id: 5,
        title: "Garlis",
        productWeight: "8pc(s)",
        productPrice: "$20",
        path: "/images/garlic.jpg",
      },
      {
        id: 6,
        title: "GreenApple",
        productWeight: "12pc(s)",
        productPrice: "$10",
        path: "/images/apple.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="row p-5">
        {this.state.item.map((data) => (
          <div key={data.id} className="col-3">
            <ItemCard item={data} />
          </div>
        ))}
      </div>
    );
  }
}

export default ItemList;
