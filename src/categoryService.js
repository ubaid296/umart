const categories = [
  { id: 1, name: "Fruites" },
  { id: 2, name: "Dry Fruites" },
  { id: 3, name: "Vegitables" },
];

export function getAllCategories() {
  return categories;
}

export function getCategoryById(id) {
  const category = categories.filter((c) => c.id === id);
  return category[0].name;
}
