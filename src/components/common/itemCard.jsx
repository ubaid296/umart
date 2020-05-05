import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    return (
      <div className="row item-card">
        <div className="w100">
          <img
            src="/images/bananas.jpg"
            className="align-center item-img"
            alt="item"
          />
        </div>
        <div className="w100">
          <div className="w100">
            <p>Banana</p>
            <p>8(pc)s</p>
          </div>
          <div className="w100">
            <strike>$8</strike>
          </div>
          <div className="w100">
            <div className="row">
              <div className="col-6">
                <p>$10</p>
              </div>
              <div className="col-6">
                <div className="row item-cart">
                  <img
                    src="/images/icons/cart2.png"
                    alt="cart"
                    height="20px"
                    className="cart-img"
                  />
                  <p>Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
