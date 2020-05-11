import React, { Component } from "react";
import Table from "./table";

class Home extends Component {
  state = {
    fields: ["Id", "Name", "Price", "Discount", "Rating"],
    data: [
      { id: 1, name: "Banana", price: 100, discount: 2.5, rating: 4.5 },
      { id: 2, name: "Orange", price: 120, discount: 2.5, rating: 3 },
      { id: 3, name: "Mango", price: 80, discount: 2.5, rating: 4.2 },
      { id: 4, name: "Water Melon", price: 220, discount: 2.5, rating: 3.5 },
      { id: 5, name: "Graps", price: 250, discount: 2.5, rating: 2.5 },
    ],
  };
  render() {
    const { data, fields } = this.state;
    return <Table data={data} fields={fields} />;
  }
}

export default Home;
