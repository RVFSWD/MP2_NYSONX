let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Mobile Connector',
        image: 'mobileconnector.png',
        price: 1200
    },
    {
        id: 2,
        name: 'Plaid Zero Wheel and Tire',
        image: 'modelsplaidzerogwheelandtire.png',
        price: 130000
    },
    {
        id: 3,
        name: 'Charging Adapters',
        image: 'chargingadapters.png',
        price: 250
    },
    {
        id: 4,
        name: 'Roof Rack',
        image: 'roofrack.png',
        price: 90000
    },
    {
        id: 5,
        name: 'HEPA Air Filtration',
        image: 'hepaairfiltration.png',
        price: 400
    },
    {
        id: 6,
        name: 'Tempest Wheel and Tire',
        image: 'tempestwheelandwintertire.png',
        price: 110000
    },
    {
        id: 7,
        name: 'Roadside Safety Kit',
        image: 'roadsidesafetykit.png',
        price: 2000
    },
    {
        id: 8,
        name: 'Car Cover',
        image: 'carcover.png',
        price: 7000
    },
    {
        id: 9,
        name: 'Wall Connector',
        image: 'wallconnector.png',
        price: 12000
    },
];

let listCards = [];
function initApp(){

    // Check for existing cart data in local storage ##################
    const savedCartData = JSON.parse(localStorage.getItem("cartData"));
     if (savedCartData) {
    listCards = savedCartData;
    } else {


    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="Store images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}

} // ###################################################

reloadCard(); // ######################################


initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key])); // listCards[key] == products[key];
        listCards[key].quantity = 1; 
    }
    reloadCard();

// Save updated cart data to local storage ####################

    localStorage.setItem("cartData", JSON.stringify(listCards));

}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="Store images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();

    // Save updated cart data to local storage #################
    localStorage.setItem("cartData", JSON.stringify(listCards));

}

//  testing beacuse of BUG ################################## 

// sample proceed to check out btn #######################
  
          // Add Proceed to Checkout button
          let checkoutButton = document.createElement('button');
          checkoutButton.innerText = 'Proceed to Checkout';
          checkoutButton.addEventListener('click', () => {
              // Add any additional logic for checkout if needed
              alert('Proceeding to Checkout!');
          });
  
          // Append the Checkout button to the body
          body.appendChild(checkoutButton);














