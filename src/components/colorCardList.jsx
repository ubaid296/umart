import React, { Component } from "react";
import ColorCard from "./common/colorCard";

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
      },
      {
        title: "Coupan Savings",
        description: "Upto 40% off everyday essentials",
        btnText: "Shop Coupan",
        path: "/images/gift.png",
        cardClass: "color-card2",
        btnClass: "card-btn2",
      },
      {
        title: "Free Delivery",
        description: "With seleceted items",
        btnText: "Shop Now",
        path: "/images/gift.png",
        cardClass: "color-card3",
        btnClass: "card-btn3",
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
