import React, { Component, Fragment } from "react";
import Category from "./Category";
import CategoryItems from "./CategoryItems";

import { getCategories, getCategoryItems } from "../services/menu-service";

export default class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      categoryItems: null,
    };
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
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
            <Category
              categories={categories}
              handleCategoryClick={this.handleCategoryClick}
            />
          </div>
          <div className="col-sm-6 col-lg-9">
            {categoryItems && <CategoryItems categoryItems={categoryItems} />}
          </div>
        </div>
      </Fragment>
    );
  }
}
