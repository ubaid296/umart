import React, { Component } from "react";
import ItemCard from "./common/itemCard";

class ItemList extends Component {
  state = {
    item: [
      {
        title: "banana",
        productWeight: "8pc(s)",
        productPrice: "$10",
        path: "/images/bananas.jpg",
        titleClass: "item-title",
      },
      {
        title: "Onion",
        productWeight: "8pc(s)",
        productPrice: "$6",
        path: "/images/onion.jpg",
      },
      {
        title: "Grapes",
        productWeight: "5pc(s)",
        productPrice: "$15",
        path: "/images/grapes.jpg",
      },
      {
        title: "Coconut",
        productWeight: "10pc(s)",
        productPrice: "$7",
        path: "/images/coconut.jpg",
      },
      {
        title: "Garlis",
        productWeight: "8pc(s)",
        productPrice: "$20",
        path: "/images/garlic.jpg",
      },
      {
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
          <div className="col-4">
            <ItemCard item={data} />
          </div>
        ))}
      </div>
    );
  }
}

export default ItemList;
