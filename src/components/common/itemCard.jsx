import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    const {
      title,
      productWeight,
      productPrice,
      productSale,
      path,
    } = this.props.item;

    return (
      <div className="row item-card">
        <div className="w100">
          <img
            src={path}
            className="align-center item-img"
            alt="item"
            height="200px"
          />
        </div>
        <div className="w100">
          <div className="w100">
            <p className="item-title">{title}</p>
            <p className="item-quantity">{productWeight}</p>
          </div>
          <div className="w100">
            <strike className="item-sale">{productSale}</strike>
          </div>
          <div className="w100">
            <div className="row">
              <div className="col-6">
                <p className="item-price">{productPrice}</p>
              </div>
              <div className="col-6">
                <div className="row item-cart">
                  <img
                    src="/images/icons/cart2.png"
                    alt="cart"
                    height="22px"
                    className="cart-img"
                  />
                  <p className="item-margencart">Cart</p>
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
