import React, { Component } from "react";
import TableHead from "./tablehead";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { data, fields, onDelete } = this.props;

    return (
      <table className="table">
        <TableHead fields={fields} />
        <TableBody data={data} fields={fields} onDelete={onDelete} />
      </table>
    );
  }
}

export default Table;
