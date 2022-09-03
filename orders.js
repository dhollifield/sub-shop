const orders = []


export const getOrders = () => {
    const getOrdersCopy = orders.map(order => ({...order}))
    return getOrdersCopy
  }

const getNewOrderId = () => {
  const copyOfOrders = getOrders();
  let highestOrderId = 0
  if(orders.length > 0) {
    highestOrderId = copyOfOrders.sort((a, b) => b.id - a.id)[0].id
  }
    return highestOrderId + 1
}

export const addNewOrder = (order) => {
    const newId = getNewOrderId();
    order.id = newId;
    orders.push(order);
    document.dispatchEvent(new CustomEvent("stateChanged"))
}