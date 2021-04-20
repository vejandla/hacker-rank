import React, { Component, Fragment } from "react";
import CategoryItems from "./CategoryItems";
import { getCategories, getCategoryItems } from "../services/menu-service";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      categoryItems: null,
    };
  }

  handleCategoryClick(categoryName) {
    getCategoryItems(categoryName).then((categoryItems) =>
      this.setState({ categoryItems })
    );
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories, categoryItems } = this.state;
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <ul>
              {categories &&
                categories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => {
                      this.handleCategoryClick(category.short_name);
                    }}
                  >
                    {`${category.name} - (${category.short_name})`}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-sm-6 col-lg-9">
            {categoryItems && <CategoryItems categoryItems={categoryItems} />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
