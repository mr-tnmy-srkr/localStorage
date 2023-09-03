const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCard = () => {
  let cart = {};
  const storedCard = localStorage.getItem("cart");
  if (storedCard) {
    cart = JSON.parse(storedCard);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCard();
    cart[product] = quantity;
    // console.log(cart)
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
};
const displayProductsFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCard();
    // console.log(savedCart);
    for(const product in savedCart){
const quantity = savedCart[product]
console.log(product, quantity)
    } 
}
displayProductsFromLocalStorage();