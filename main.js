import {getOrders, addNewOrder} from './orders.js'

document.getElementById("app").innerHTML = `
<h1>Deanna's Sub Shop</h1>
<div>
  <h3>Please make your sub!</h3>
  <div class="subForm">
    <div class="bread">
      <p><strong>Pick your bread</strong></p>
      <label for="White">White</label>
      <input id="white" name="bread" type="radio" value="White" />
      <label for="Wheat">Wheat</label>
      <input id="wheat" name="bread" type="radio" value="Wheat" />
      <label for="Low Carb">Low Carb</label>
      <input id="low-carb" name="bread" type="radio" value="Low Carb" />
      <label for="Herb and Cheese">Herb & Cheese</label>
      <input id="herb-and-cheese" name="bread" type="radio" value="Herb and Cheese" />
      <p><trong>Do you want the bread toasted?</strong></p>
      <label for="Toasted">Toasted</label>
      <input id="Toasted" name="toasted" type="radio" value="Toasted" />
      <label for="notToasted">Not Toasted</label>
      <input id="notToasted" name="toasted" type="radio" value="Not Toasted" checked/>
      </div>
      <div class="protein">
      <p><strong>Pick your protein</strong></p>
      <label for="Ham">Ham</label>
      <input id="ham" name="protein" type="radio" value="Ham" />
      <label for="Turkey">Turkey</label>
      <input id="turkey" name="protein" type="radio" value="Turkey" />
      <label for="Salami">Salami</label>
      <input id="salami" name="protein" type="radio" value="Salami" />
      <label for="Chicken">Chicken</label>
      <input id="chicken" name="protein" type="radio" value="Chicken" />
      <label for="Pepperoni">Pepperoni</label>
      <input id="pepperoni" name="protein" type="radio" value="Pepperoni" />
      </div>
      <div class="cheese">
      <p><strong>Pick your cheese</strong></p>
      <label for="American">American</label>
      <input id="american" name="cheese" type="radio" value="American" />
      <label for="Cheddar">Cheddar</label>
      <input id="cheddar" name="cheese" type="radio" value="Cheddar" />
      <label for="Swiss">Swiss</label>
      <input id="swiss" name="cheese" type="radio" value="Swiss" />
      <label for="Pepper Jack">Pepper Jack</label>
      <input id="pepperJack]" name="cheese" type="radio" value="Pepper Jack" />
      <label for="No cheese">No cheese</label>
      <input id="noCheese" name="cheese" type="radio" value="No cheese" checked />
      </div>
      <div class="toppings">
        <p><strong>Pick Your Toppings (Select all that apply)</strong></p>
        <ul>
          <li>
            <input id="lettuce" name="toppings" type="checkbox" value="Lettuce" />
            <label for="Lettuce">Lettuce</label>
          </li>
          <li>
            <input id="tomato" name="toppings" type="checkbox" value="Tomato" />
            <label for="Tomato">Tomato</label>
          </li>
          <li>
            <input id="blackOlives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="bananaPeppers" name="toppings" type="checkbox" value="Banana Peppers" />
            <label for="Banana Peppers">Banana Peppers</label>
          </li>
          <li>
            <input id="onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
          <li>
            <input id="jalapenoPeppers" name="toppings" type="checkbox" value="Jalapeno Peppers" />
            <label for="Jalapeno Peppers">Jalapeno Peppers</label>
          </li>
          <li>
            <input id="pickles" name="toppings" type="checkbox" value="Pickles" />
            <label for="Pickles">Pickles</label>
          </li>
        </ul>  
    </div>
    <div>
      <button id="submitOrder">Order Sub</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

// .join takes the array and brings them together //

const displayOrders = () => {
    const orders = getOrders()
    let html = ''
    for (let order of orders) {
      html += `<div>
      <h4>Order #: ${order.id}</h4>
      <p>Bread: ${order.bread} (${order.toasted})</p>
      <p>Protein: ${order.protein}</p>
      <p>Cheese: ${order.cheese}</p>
      <p>Toppings: ${order.toppings.join(", ")}</p>
      </div>`;
    }
    document.getElementById("orders").innerHTML = html;
};

displayOrders();

document.addEventListener("click", (e) => {
    if (e.target.id === "submitOrder") {
      const bread = document.querySelector("input[name=bread]:checked")?.value;

      const toasted = document.querySelector("input[name=toasted]:checked")?.value;

      const cheese = document.querySelector("input[name=cheese]:checked")?.value;

      const protein = document.querySelector("input[name=protein]:checked")?.value;

      const toppingsElements = document.querySelectorAll("input[name=toppings]:checked");

      const toppingsArray = []
      toppingsElements.forEach((toppingElement) => {
        toppingsArray.push(toppingElement.value);
      });

      const newOrder = {
        bread: bread,
        toasted: toasted,
        protein: protein,
        cheese: cheese,
        toppings: toppingsArray
      };
      
      addNewOrder(newOrder)
    }
});

document.addEventListener("stateChanged", (e) => {
    displayOrders()
});