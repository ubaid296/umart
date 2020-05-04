import React, { Component } from "react";
// import gift from "../../public/images/gift";

class ColorCard extends Component {
  render() {
    const cardClasses = `card ${this.props.content.cardClass}`;
    const btnClasses = `btn ${this.props.content.btnClass}`;
    return (
      <div className={cardClasses}>
        <div className="row">
          <div className="col-6">
            <h5>{this.props.content.title}</h5>
            <p>{this.props.content.description}</p>
            <button className={btnClasses}>{this.props.content.btnText}</button>
          </div>
          <div className="col-6">
            <img
              className="float-right"
              src={this.props.content.path}
              alt="gift"
              height="120px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorCard;
