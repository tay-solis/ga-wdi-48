let menuItems = document.querySelectorAll('.menuItem');
let cart = document.querySelector('.cart');
let currentCart = [];
let total = document.querySelector('.total');
let totalCount = 0;
let clear = document.querySelector('.clear');
let cartIcon =document.querySelector('.cartIcon');
let hamburger =document.querySelector('.hamburger');
let aside= document.querySelector("aside");
let navLinks = document.querySelector(".navLinks");

/*  The item in the cart refers to the menu item that the customer has chosen,
    and includes a count of how many of that item they wish to purchase.*/
class cartItem{
  constructor(name, count, elm){
    this.name = name;
    this.count = count;
    this.elm = elm;
  }
}

/*  Removes an item from the currentCart array */

const removeItem = (item) =>{

  for(let i = 0; i < currentCart.length; i++){
    if(currentCart[i] == item){
      currentCart.splice(i, 1);
      return;
    }
  }
}

/*  Returns the index of an item in the cart based on its name. */

const includesItem = (itemName) =>{
  for (let i = 0; i < currentCart.length; i++){
    if(currentCart[i].name == itemName) return i;
  }
  return -1;
}

const updateCounts = (index, operator) => {
  console.log(operator)
  if(operator === "minus") {
    currentCart[index].count -= 1;
    totalCount -= 1;
  } else if(operator === "plus") {
    currentCart[index].count += 1;
    totalCount += 1;
  }
  cart.children[index].querySelector('span').textContent = currentCart[index].count;
  total.textContent = totalCount;
}

/* Clears Cart */
const clearCart = () => {
  let j = currentCart.length;
  cart.innerHTML = ""
  currentCart = [];
  totalCount = 0;
  total.textContent = totalCount;
}

const setUpMenu = () =>{
  /*  Takes DOM elements in menu and adds listeners. */
  for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", function(){
  /*  When an item is selected for the first time, it creates a cartItem object
      including the name of the item, how many of that item a customer is putchasing (starting
      with 1). Creates an li in the .cart ul.*/
      let itemName = this.querySelector('p').innerHTML;
      if(includesItem(itemName) === -1){
        let newItemElm = document.createElement('li');
        newItemElm.innerHTML = '<li><p>' + itemName + ' x <span></span></p></li>';
        newItemElm.setAttribute('alt', itemName);
        let newItem = new cartItem(itemName, 0, newItemElm);
        currentCart.push(newItem);
        let index = includesItem(itemName);
        cart.appendChild(newItem.elm);
        updateCounts(index, "plus");
        newItemElm.addEventListener("click", function(){
        /* When a cart item is clicked, it reduces the count of that item by 1. When the
            count hits 0, it removes the item from the cart.  */
            updateCounts(index, "minus");
          if (currentCart[index].count < 1){
            removeItem(newItem);
            cart.removeChild(newItem.elm);
          }
        });
      /*  If an item is already in the cart, clicking on that item in the menu increases
          the count of that object by 1 and updates the DOM element  */
      } else if (includesItem(itemName) >= 0){
        let index = includesItem(itemName);
        updateCounts(index, "plus");
      }
    });
  }
  clear.addEventListener("click", function (){
    clearCart();
  });
  cartIcon.addEventListener("click",function(){
    if (aside.style.display == "none") {
      aside.style.display = "block";
      navLinks.style.display = "none";
    } else{
      aside.style.display = "none";
    }
  });
  hamburger.addEventListener("click",function(){
    if (navLinks.style.display == "none"){
      navLinks.style.display = "block";
      aside.style.display = "none";
    } else{
      navLinks.style.display = "none"
    }
  });

  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 720px)").matches) {
        navLinks.style.display = "flex";
        aside.style.display = "block";
    } else{
      navLinks.style.display = "none";
      aside.style.display = "none";
    }
});
}

setUpMenu();
