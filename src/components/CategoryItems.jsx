import React, { Fragment } from "react";

const CategoryItems = ({ categoryItems }) => {
  return (
    <Fragment>
      {categoryItems && (
        <table className="table table-condensed table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {categoryItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default CategoryItems;
