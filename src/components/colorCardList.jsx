import React, { Component } from "react";
import ColorCard from "./common/colorCard";
import ItemCard from "./common/itemCard";
class ColorCardList extends Component {
  state = {
    content: [
      {
        title: "Gift Voucher",
        description: "With personal care items",
        btnText: "Shop Coupan",
        path: "/images/gift.png",
        cardClass: "color-card1",
        btnClass: "card-btn1",
        titleClass: "card-title",
        descriptionClass: "card-description",
      },
      {
        title: "Coupan Savings",
        description: "Upto 40% off everyday essentials",
        btnText: "Shop Coupan",
        path: "/images/business.png",
        cardClass: "color-card2",
        btnClass: "card-btn2",
        titleClass: "card-title",
      },
      {
        title: "Free Delivery",
        description: "With seleceted items",
        btnText: "Shop Now",
        path: "/images/truck.png",
        cardClass: "color-card3",
        btnClass: "card-btn3",
        titleClass: "card-title",
      },
    ],
  };
  render() {
    return (
      <div className="row p-5">
        {this.state.content.map((data) => (
          <div className="col-4">
            <ColorCard content={data} />
          </div>
        ))}
      </div>
    );
  }
}

export default ColorCardList;
