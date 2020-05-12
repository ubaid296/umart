import React, { Component } from "react";
import Table from "./table";
import { getAllFoods } from "../foodService";
import { getCategoryById } from "../categoryService";

class Home extends Component {
  state = {
    fields: ["Id", "Name", "Category", "Price", "Discount", "Rating"],
    foods: [],
  };

  componentDidMount() {
    const data = getAllFoods();
    let foods = data.map((food) => ({
      id: food.id,
      name: food.name,
      category: getCategoryById(food.categoryId),
      price: food.price,
      discount: food.discount,
      rating: food.rating,
    }));

    this.setState({ foods });
  }

  handleDelete = (item) => {
    let { foods } = this.state;
    const index = foods.indexOf(item);
    foods.splice(index, 1);
    this.setState({ foods });
  };

  render() {
    const { foods: data, fields } = this.state;
    return <Table data={data} fields={fields} onDelete={this.handleDelete} />;
  }
}

export default Home;
