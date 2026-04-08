// Initial dishes data
const dishes = [
  {
    id: 1,
    name: "Pizza",
    Description: "A delicious cheesy delight with various toppings.",
    Price: 9.99,
    Rating: 4.5,
    Category: "Veg",
    Discount: 10,
  },
  {
    id: 2,
    name: "Burger",
    Description:
      "A juicy and flavorful burger with lettuce, tomato, and cheese.",
    Price: 7.99,
    Rating: 4.2,
    Category: "Veg",
    Discount: 15,
  },
];

// Cart array to hold items added to the cart........................................................................................................................................................
const cart = [];

//functions to save and get data from local storage........................................................................................................................................................
function savedToLocalDish(forLocalStorage) {
  localStorage.setItem("dishes", JSON.stringify(forLocalStorage));
}

function getFromLocalDish() {
  return JSON.parse(localStorage.getItem("dishes"));
}

function savedToLocalCart(c) {
  localStorage.setItem("cart", JSON.stringify(c));
}

function getCartFromLocal() {
  return JSON.parse(localStorage.getItem("cart"));
}

// {name, price, discount,quantity}

nameInput = document.querySelector("#nameInput");
descriptionInput = document.querySelector("#descriptionInput");
priceInput = document.querySelector("#priceInput");
discountInput = document.querySelector("#discountInput");
categoryVegInput = document.querySelector("#vegInput");
categoryNonVegInput = document.querySelector("#nonvegInput");
ratingInput = document.querySelector("#selectRating");

// Function to render dishes on the webpage..........................................................................................................................

function renderDishes(dishes1) {
  document.querySelector("#showDishes").innerHTML = dishes1
    .map(
      (dish, i) => `
    <div class='col-12 col-md-6 col-lg-3'>
                        <div class="card " style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${dish.name}</h5>
                                <p class="card-text">${dish.Description}</p>
                                <p class="card-text">Price: $${dish.Price}</p>
                                <p class="card-text">Rating: ${dish.Rating}</p>
                                <p class="card-text">Category: ${dish.Category}</p>
                                <p class="card-text">Discount: ${dish.Discount}%</p>
    <p  class="card-link" ><button class="btn btn-danger" onclick="AddToCart(${dish.id})">Add to cart</button></a>
  </div>
</div>
                </div>`,
    )
    .join("");
}

// Function to add a new dish to the dishes array........................................................................................................................................................
function addNewDish() {
  const newDish = {
    id: Date.now(),
    name: nameInput.value,
    Description: descriptionInput.value,
    Price: priceInput.value,
    Discount: discountInput.value,
    Category: categoryVegInput.checked ? "Veg" : "Non-Veg",
    Rating: ratingInput.value,
  };
  // console.log(newDish);
  // dishes.push(newDish);
  // console.log(dishes);
  // renderDishes(dishes);
  console.log(newDish);
  dishesFRomLocal = getFromLocalDish();
  dishesFRomLocal.push(newDish);
  savedToLocalDish(dishesFRomLocal);
  // remove values from input elements
  // close the modal after succesful add
  console.log(dishes);
  renderDishes(dishesFRomLocal);

  nameInput.value = "";
  descriptionInput.value = "";
  priceInput.value = "";
  discountInput.value = "";
  categoryVegInput.checked = true;
  ratingInput.value = "1";

  //ARIA alert removed in console using chat GPT. Meaning: Your modal is getting closed. BUT the button inside modal is still focused. Bootstrap tries to hide modal (aria-hidden="true"). Browser says: ❌ “You can’t hide something that still has focus”

  document.activeElement.blur();

  const modalEl = document.getElementById("forNewDishModal");
  const modal = bootstrap.Modal.getInstance(modalEl);

  modal.hide();
}

// Function to add a dish to the cart.....................................................................................................................................
// function AddToCart(ID) {
//   index = cart.findIndex((dInC, i) => dInC.dish_id == ID);

//   if (index != -1) {
//     cart[index].quantity += 1;
//     console.log("quantity.cart ******", cart);
//   } else {
//     const dishForCart = dishes.find((d) => d.id == ID);

//     const dishInCart = {
//       id: Date.now(),
//       dish_id: dishForCart.id,
//       name: dishForCart.name,
//       price: dishForCart.Price,
//       discount: dishForCart.Discount,
//       quantity: 1,
//     };
//     cart.push(dishInCart);
//     console.log("cart ******", cart);
//   }
//   document.getElementById("cartLength").textContent = cart.length;
// }

function AddToCart(ID) {
  const getCFromLocal = getCartFromLocal();
  index = getCFromLocal.findIndex((dInC, i) => dInC.dish_id == ID);
  console.log(index);
  if (index != -1) {
    getCFromLocal[index].quantity = getCFromLocal[index].quantity + 1;
    savedToLocalCart(getCFromLocal);
    console.log("quantity.cart ******", cart);
  } else {
    getFromLocalDishes = getFromLocalDish();
    const dishForCart = getFromLocalDishes.find((d) => d.id == ID);

    const dishInCart = {
      id: Date.now(),
      dish_id: dishForCart.id,
      name: dishForCart.name,
      price: dishForCart.price,
      discount: dishForCart.discount,
      quantity: 1,
    };
    getCFromLocal.push(dishInCart);
    savedToLocalCart(getCFromLocal);
    console.log("cart ******", getCFromLocal);
  }
  document.getElementById("cartLength").textContent = getCFromLocal.length;
}

document.addEventListener("DOMContentLoaded", () => {
  alreadySavedDish = getFromLocalDish();
  if (!alreadySavedDish) {
    savedToLocalDish(dishes);
  }

  renderDishes(alreadySavedDish);

  savedCArt = getCartFromLocal();

  if (!savedCArt) {
    savedToLocalCart([]);
  }
  document.getElementById("cartLength").textContent = savedCArt.length;
});
