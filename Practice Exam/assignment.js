//sample data for products
const products = [
  {
    id: 1,
    title: "Laptop",
    category: "Electronics",
    price: 55000,
    stock: 10,
    rating: 4.8,
    brand: "Dell",
    createdAt: "2026-05-01",
  },
  {
    id: 2,
    title: "Mobile",
    category: "Electronics",
    price: 25000,
    stock: 5,
    rating: 4.5,
    brand: "Samsung",
    createdAt: "2026-05-10",
  },
  {
    id: 3,
    title: "Shoes",
    category: "Fashion",
    price: 3000,
    stock: 0,
    rating: 4.1,
    brand: "Nike",
    createdAt: "2026-04-20",
  },
  {
    id: 4,
    title: "Headphones",
    category: "Electronics",
    price: 2000,
    stock: 15,
    rating: 3.9,
    brand: "Boat",
    createdAt: "2026-05-15",
  },
  {
    id: 5,
    title: "Book",
    category: "Education",
    price: 500,
    stock: 20,
    rating: 4.7,
    brand: "Penguin",
    createdAt: "2026-05-05",
  },
];

//level 1 beginner

// 1.Product price checker. Check whether it is affordable(less than 1000) or not.
let price = 799;
console.log("Q1:", price < 1000 ? "Affordable Product" : "Expensive Product");

// 2.Display all product names
console.log("Q2: Product Titles:");
products.forEach((product) => console.log(product.title));

//3. A user enters email and password. Check if both are non-empty.
let email = "soham33@gmai.com";
let password = "pass123";
function validateCredentials(email, password) {
  if (email && password == "") return "Credentials are invalid";
  return "Credentials are valid";
}
console.log("Q3:", validateCredentials(email, password));

//4.rating checker.  if the product rating is 4.5>=excellent, rating is 4 >=  good, otherwise average.
function getRatingBadge(rating) {
  if (rating >= 4.5) return "Excellent";
  if (rating >= 3) return "Good";
  return "Average";
}
console.log("Q4:", getRatingBadge(4.6));

//5.free shipping eligibility.
function isEligibleForFreeShipping(price) {
  if (price >= 999) return "Eligible for free shipping";
  return "Not eligible for free shipping";
}
console.log("Q5:", isEligibleForFreeShipping(600));

//6.Check Stock Availability
function checkStockAvailability(stock) {
  if (stock > 0) return "In Stock";
  return "Out of Stock";
}
console.log("Q6:", checkStockAvailability(5));

// 7. Count total products

function countProducts() {
  return products.length;
}
console.log("Q7:", countProducts());

// 8.Calculate total stock

function calculateTotalStock() {
  let totalStock = 0;
  products.forEach((product) => {
    totalStock += product.stock;
  });
  return totalStock;
}
console.log("Q8:", calculateTotalStock());

//9.Find highest priced product

function highestPricedProduct() {
  let highestPrice = 0;
  let highestPricedProduct = null;
  products.forEach((product) => {
    if (product.price > highestPrice) {
      highestPrice = product.price;
      highestPricedProduct = product;
    }
  });
  return highestPricedProduct.title;
}
console.log("Q9:", highestPricedProduct());
//10.Find lowest priced product

function lowestPricedProduct() {
  let lowestPrice = Infinity;
  let lowestPricedProduct = null;
  products.forEach((product) => {
    if (product.price < lowestPrice) {
      lowestPrice = product.price;
      lowestPricedProduct = product;
    }
  });
  return lowestPricedProduct.title;
}
console.log("Q10:", lowestPricedProduct());

//11.Count available products

function countAvailableProducts() {
  let availableCount = 0;
  products.forEach((product) => {
    if (product.stock > 0) availableCount++;
  });
  return availableCount;
}
console.log("Q11:", countAvailableProducts());

//12.Search product by name

function searchProductByName(name) {
  const foundProducts = products.filter((product) =>
    product.title.toLowerCase().includes(name.toLowerCase()),
  );
  return foundProducts.map((product) => product.title);
}
console.log("Q12:", searchProductByName("book"));

//13. Find all electronics products

function findElectronicsProducts() {
  const electronicsProducts = products.filter(
    (product) => product.category === "Electronics",
  );
  return electronicsProducts.map((product) => product.title);
}
console.log("Q13:", findElectronicsProducts());

//14. Find out of stock products
function findOutOfStockProducts() {
  const outOfStockProducts = products.filter((product) => product.stock === 0);
  return outOfStockProducts.map((product) => product.title);
}
console.log("Q14:", findOutOfStockProducts());

//15.Calculate average product rating

function calculateAverageRating() {
  let totalRating = 0;
  products.forEach((product) => {
    totalRating += product.rating;
  });
  return totalRating / products.length;
}
console.log("Q15:", calculateAverageRating());

//16.Count Products category wise

function countProductsByCategory() {
  const categoryCount = {};
  products.forEach((product) => {
    if (categoryCount[product.category]) {
      categoryCount[product.category]++;
    } else {
      categoryCount[product.category] = 1;
    }
  });
  return categoryCount;
}
console.log("Q16:", countProductsByCategory());