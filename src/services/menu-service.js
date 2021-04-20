export const getCategories = async () => {
  const response = await fetch(
    "http://stream-restaurant-menu-svc.herokuapp.com/category"
  );
  const categories = await response.json();
  return categories;
};

export const getCategoryItems = async (categoryName) => {
  const response = await fetch(
    `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${categoryName}`
  );
  const categoryItems = await response.json();
  return categoryItems;
};
