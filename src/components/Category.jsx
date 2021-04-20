import React, { Component, Fragment } from "react";
import CategoryItems from "./CategoryItems";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      categoryItem: null,
    };
  }

  handleOnClick(id) {
    fetch(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${id}`)
      .then((response) => response.json())
      .then((categoryItem) => this.setState({ categoryItem }));
  }

  componentDidMount() {
    fetch("http://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((response) => response.json())
      .then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories, categoryItem } = this.state;
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
                      this.handleOnClick(category.short_name);
                    }}
                  >
                    {`${category.name} - (${category.short_name})`}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-sm-6 col-lg-9">
            {categoryItem && <CategoryItems categoryItem={categoryItem} />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
