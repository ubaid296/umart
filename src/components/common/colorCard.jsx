import React, { Component } from "react";

class ColorCard extends Component {
  render() {
    const {
      cardClass,
      btnClass,
      title,
      description,
      btnText,
    } = this.props.content;

    const cardClasses = `card ${cardClass}`;
    const btnClasses = `btn ${btnClass}`;

    return (
      <div className={cardClasses}>
        <div className="row">
          <div className="col-6">
            <h5 className="card-title">{title}</h5>
            <p className="card-description">{description}</p>
            <button className={btnClasses}>{btnText}</button>
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
