import React, { Component } from "react";
import { getDiscountedValue } from "../../lib";

class ItemCard extends Component {
  render() {
    const {
      title,
      productWeight,
      productPrice,
      discount,
      path,
    } = this.props.item;

    return (
      <div className="row item-card">
        <div className="w100" style={{ position: "relative" }}>
          {discount && <p className="discount">{discount}%</p>}
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
            {discount && <strike className="item-sale">${productPrice}</strike>}
          </div>
          <div className="w100">
            <div className="row">
              <div className="col-6">
                {discount ? (
                  <p className="item-price">
                    ${getDiscountedValue(productPrice, discount)}
                  </p>
                ) : (
                  <p className="item-price">${productPrice}</p>
                )}
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
