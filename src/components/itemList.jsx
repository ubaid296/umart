import React, { Component } from "react";
import ItemCard from "./common/itemCard";

class ItemList extends Component {
  state = {
    item: [
      {
        title: "banana",
        productWeight: "8pc(s)",
        productPrice: "$10",
        productSale: "$3",
        path: "/images/bananas.jpg",
        titleClass: "item-title",
        quantityClass: "item-qunatity",
        priceClass: "item-price",
        saleClass: "item-sale",
      },
      {
        title: "Onion",
        productWeight: "8pc(s)",
        productPrice: "$6",
        productSale: "$5",
        path: "/images/onion.jpg",
        quantityClass: "item-qunatity",
        priceClass: "item-price",
      },
      {
        title: "Grapes",
        productWeight: "5pc(s)",
        productPrice: "$15",
        productSale: "$10",
        path: "/images/grapes.jpg",
        quantityClass: "item-qunatity",
        priceClass: "item-price",
      },
      {
        title: "Coconut",
        productWeight: "10pc(s)",
        productPrice: "$7",
        productSale: "$2",
        path: "/images/coconut.jpg",
        quantityClass: "item-qunatity",
        priceClass: "item-price",
      },
      {
        title: "Garlis",
        productWeight: "8pc(s)",
        productPrice: "$20",
        productSale: "$10",
        path: "/images/garlic.jpg",
        quantityClass: "item-qunatity",
        priceClass: "item-price",
      },
      {
        title: "GreenApple",
        productWeight: "12pc(s)",
        productPrice: "$10",
        productSale: "$4",
        path: "/images/apple.jpg",
        quantityClass: "item-quantity",
        priceClass: "item-price",
      },
      {
        title: "Lemon",
        productWeight: "12pc(s)",
        productPrice: "$10",
        productSale: "$4",
        path: "/images/lemon.jpg",
        quantityClass: "item-quantity",
        priceClass: "item-price",
      },
      {
        title: "Oranges",
        productWeight: "12pc(s)",
        productPrice: "$10",
        productSale: "$4",
        path: "/images/orange.jpg",
        quantityClass: "item-quantity",
        priceClass: "item-price",
      },
    ],
  };
  render() {
    return (
      <div className="row p-5">
        {this.state.item.map((data) => (
          <div className="col-3">
            <ItemCard item={data} />
          </div>
        ))}
      </div>
    );
  }
}

export default ItemList;
