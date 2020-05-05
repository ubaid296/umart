import React, { Component } from "react";

class ItemCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <h5 className="titleClass">{this.props.item.title}</h5>
            <p>{this.props.item.productWeight}</p>
            <h5>{this.props.item.productPrice}</h5>
          </div>
          <div className="col-6">
            <img
              className="float-right"
              src={this.props.item.path}
              alt="banana"
              height="200px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
