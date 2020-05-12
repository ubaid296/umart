import React from "react";

const TableBody = ({ data, fields, onDelete }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {fields.map((filed) => (
            <td key={`${filed}-${item.id}`} className="text-center ">
              {item[filed.toLowerCase()]}{" "}
            </td>
          ))}
          <td>
            <button
              onClick={() => onDelete(item)}
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
