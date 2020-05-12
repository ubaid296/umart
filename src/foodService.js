const foods = [
  {
    id: 1,
    name: "Banana",
    price: 100,
    discount: 2.5,
    rating: 4.5,
    categoryId: 1,
  },
  { id: 2, name: "Pea", price: 120, discount: 2.5, rating: 3, categoryId: 3 },
  {
    id: 3,
    name: "Badam",
    price: 80,
    discount: 2.5,
    rating: 4.2,
    categoryId: 2,
  },
  {
    id: 4,
    name: "Water Melon",
    price: 220,
    discount: 2.5,
    rating: 3.5,
    categoryId: 1,
  },
  {
    id: 5,
    name: "Graps",
    price: 250,
    discount: 2.5,
    rating: 2.5,
    categoryId: 1,
  },
  { id: 6, name: "Yam", price: 120, discount: 2.5, rating: 3, categoryId: 3 },
  {
    id: 7,
    name: "Radsih",
    price: 120,
    discount: 2.5,
    rating: 3,
    categoryId: 3,
  },
  {
    id: 8,
    name: "Akhrot",
    price: 80,
    discount: 2.5,
    rating: 4.2,
    categoryId: 2,
  },
];

export function getAllFoods() {
  return foods;
}
