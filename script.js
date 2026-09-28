let coffeeButtons = document.querySelectorAll('.coffee-button')
let selectedCoffee = document.getElementById('selected-coffee')

let sizeButtons = document.querySelectorAll('.size-button')
let selectedSize = document.getElementById('selected-size')

let milkButtons = document.querySelectorAll('.milk-button')
let selectedMilk = document.getElementById('selected-milk')

let syrupButtons = document.querySelectorAll('.syrup-button')
let selectedSyrup = document.getElementById('selected-syrup')

let totalPriceElement = document.getElementById('total-price')

let addOrderButton = document.getElementById('add-order-button')
let orderList = document.getElementById('order-list')

let orderTotalElement = document.getElementById('order-total')

let coffeePrice = 0
let sizePrice = 0
let milkPrice = 0
let syrupPrice = 0
let orderTotal = 0

for (let i = 0; i < coffeeButtons.length; i++) {
  coffeeButtons[i].addEventListener('click', () => {
    selectedCoffee.innerHTML = coffeeButtons[i].innerHTML
    coffeePrice = coffeeButtons[i].dataset.price

    updatePrice()
  })
}

for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener('click', () => {
    selectedSize.innerHTML = sizeButtons[i].innerHTML
    sizePrice = sizeButtons[i].dataset.priceChange

    updatePrice()
  })
}

for (let i = 0; i < milkButtons.length; i++) {
  milkButtons[i].addEventListener('click', () => {
    selectedMilk.innerHTML = milkButtons[i].innerHTML
    milkPrice = milkButtons[i].dataset.price

    updatePrice()
  })
}

for (let i = 0; i < syrupButtons.length; i++) {
  syrupButtons[i].addEventListener('click', () => {
    selectedSyrup.innerHTML = syrupButtons[i].innerHTML
    syrupPrice = syrupButtons[i].dataset.price

    updatePrice()
  })
}

function updatePrice() {
  let totalPrice =
    Number(coffeePrice) +
    Number(sizePrice) +
    Number(milkPrice) +
    Number(syrupPrice)

  totalPriceElement.innerHTML = '$' + totalPrice.toFixed(2)
}

addOrderButton.addEventListener('click', () => {
  let order = {
    coffee: selectedCoffee.innerHTML,
    size: selectedSize.innerHTML,
    milk: selectedMilk.innerHTML,
    syrup: selectedSyrup.innerHTML,

    price:
      Number(coffeePrice) +
      Number(sizePrice) +
      Number(milkPrice) +
      Number(syrupPrice)
  }

  let orderItem = document.createElement('p')

  orderItem.innerHTML =
    order.coffee +
    ' - ' +
    order.size +
    ' - ' +
    order.milk +
    ' - ' +
    order.syrup +
    ' - $' +
    order.price

  let removeButton = document.createElement('button')
  removeButton.innerHTML = 'Remove'
  orderItem.appendChild(removeButton)
  orderList.appendChild(orderItem)
  orderTotal += order.price
  orderTotalElement.innerHTML = orderTotal

  removeButton.addEventListener('click', () => {
    orderItem.remove()
    orderTotal -= order.price
    orderTotalElement.innerHTML = orderTotal
  })

  console.log(order)
})