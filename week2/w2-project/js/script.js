let menuItems = document.querySelectorAll('.menuItem');
let cart = document.querySelector('.cart');
let currentCart = [];

let removeItem = (item) =>{
  for(let i = 0; i < currentCart.length; i++){
    if(currentCart[i] == item){
      currentCart.splice(i, 1);
      return;
    }
  }
}

let setUpMenu = () =>{
  for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", function(){
      let itemName = this.querySelector('p').innerHTML;
      if(!currentCart.includes(itemName)){
        let newItem = document.createElement('li');
        newItem.innerHTML = '<li><p>' + itemName + '</p></li>';
        newItem.setAttribute('alt', itemName);
        newItem.addEventListener("click", function(){
          removeItem(itemName);
          cart.removeChild(newItem);
        });
        cart.appendChild(newItem);
        currentCart.push(itemName);
      } else{
      }
    });
  }
}

setUpMenu();
