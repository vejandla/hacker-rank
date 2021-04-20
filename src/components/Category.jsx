import React, { Component, Fragment } from "react";

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        <ul>
          {categories &&
            categories.map((category) => (
              <li
                key={category.id}
                onClick={() => {
                  this.props.handleCategoryClick(category.short_name);
                }}
              >
                {`${category.name} - (${category.short_name})`}
              </li>
            ))}
        </ul>
      </Fragment>
    );
  }
}

export default Categories;
