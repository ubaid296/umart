import React, { Component } from "react";
import TableHead from "./tablehead";
import TableBody from "./tableBody";

class Table extends Component {
  handleDelete = (data) => {
    console.log("handle");
  };
  render() {
    const { data, fields } = this.props;

    return (
      <table className="table">
        <TableHead fields={fields} />
        <TableBody data={data} fields={fields} onDelete={this.handleDelete} />
      </table>
    );
  }
}

export default Table;
