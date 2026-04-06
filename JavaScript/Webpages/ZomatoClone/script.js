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
// Function to render dishes on the webpage
function renderDishes() {
  document.querySelector("#showDishes").innerHTML = dishes
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

// Cart array to hold items added to the cart
const cart = [];
// {name, price, discount,quantity}

nameInput = document.querySelector("#nameInput");
descriptionInput = document.querySelector("#descriptionInput");
priceInput = document.querySelector("#priceInput");
discountInput = document.querySelector("#discountInput");
categoryVegInput = document.querySelector("#vegInput");
categoryNonVegInput = document.querySelector("#nonvegInput");
ratingInput = document.querySelector("#selectRating");

// Function to add a new dish to the dishes array
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
  console.log(newDish);
  dishes.push(newDish);
  console.log(dishes);
  renderDishes();

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

//want to save the new dish in local storage. So that when we refresh the page, the new dish is still there. We can do this by saving the dishes array in local storage whenever we add a new dish. And then when we load the page, we can check if there are any dishes in local storage and if so, we can load them into the dishes array.

// Function to save dishes to local storage

// Function to add a dish to the cart
function AddToCart(ID) {
  index = cart.findIndex((dInC, i) => dInC.dish_id == ID);

  if (index != -1) {
    cart[index].quantity += 1;
    console.log("quantity.cart ******", cart);
  } else {
    const dishForCart = dishes.find((d) => d.id == ID);

    const dishInCart = {
      id: Date.now(),
      dish_id: dishForCart.id,
      name: dishForCart.name,
      price: dishForCart.Price,
      discount: dishForCart.Discount,
      quantity: 1,
    };
    cart.push(dishInCart);
    console.log("cart ******", cart);
  }
  document.getElementById("cartLength").textContent = cart.length;
}

renderDishes();
