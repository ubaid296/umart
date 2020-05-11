import React from "react";

const TableHead = ({ fields }) => {
  return (
    <thead>
      <tr>
        {fields.map((field) => (
          <th key={field} className="text-center">
            {field}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
