import React from "react";

const TableBody = ({ data, fields }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {fields.map((filed) => (
            <td className="text-center ">{item[filed.toLowerCase()]} </td>
          ))}
          <td>
            <button
              onClick={() => this.hanldeDelete(this.props.data)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
