import React from "react";

const TableBody = ({ data, fields }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {fields.map((filed) => (
            <td className="text-center">{item[filed.toLowerCase()]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
