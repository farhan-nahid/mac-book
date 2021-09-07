// all configuration cost

const memory8Gb = 0;
const memory16Gb = 180;
const ssd256Gb = 0;
const ssd512Gb = 100;
const ssd1Tb = 180;
const freeDeliveryCost = 0;
const paidDeliveryCost = 20;
const promoCode = "stevekaku";

// get html elements by id

const bestPrice = document.getElementById("best__price");
const memoryCost = document.getElementById("memory__cost");
const storageCost = document.getElementById("storage__cost");
const deliveryCost = document.getElementById("delivery__cost");
const totalCost = document.getElementById("total__cost");
const promoCodeInput = document.getElementById("promo__code__input");
const promoCodeButton = document.getElementById("promo__code__button");
const footerTotal = document.getElementById("footer__total");

// memory price function

function handleMemoryPrice(memory) {
  if (memory == "eight__gb") {
    memoryCost.innerText = memory8Gb;
    handleCalculateTotalCost();
  } else {
    memoryCost.innerText = memory16Gb;
    handleCalculateTotalCost();
  }
}

// storage price function

function handleStoragePrice(storage) {
  if (storage == "ssd__256gb") {
    storageCost.innerText = ssd256Gb;
    handleCalculateTotalCost();
  } else if (storage == "ssd__512gb") {
    storageCost.innerText = ssd512Gb;
    handleCalculateTotalCost();
  } else {
    storageCost.innerText = ssd1Tb;
    handleCalculateTotalCost();
  }
}

// delivery cost function

function handleDeliveryCost(deliveryCharge) {
  if (deliveryCharge == "free") {
    deliveryCost.innerText = freeDeliveryCost;
    handleCalculateTotalCost();
  } else {
    deliveryCost.innerText = paidDeliveryCost;
    handleCalculateTotalCost();
  }
}

// calculate total cost function

function handleCalculateTotalCost() {
  const bestPriceNumber = Number(bestPrice.innerText);
  const memoryCostNumber = Number(memoryCost.innerText);
  const storageCostNumber = Number(storageCost.innerText);
  const deliveryCostNumber = Number(deliveryCost.innerText);
  const totalPrice =
    bestPriceNumber + memoryCostNumber + storageCostNumber + deliveryCostNumber;
  totalCost.innerText = totalPrice;
  footerTotal.innerText = totalPrice;
}

// apply promo code function

promoCodeButton.addEventListener("click", function () {
  const total = Number(totalCost.innerText);
  if (promoCodeInput.value == promoCode) {
    const discountPrice = total - Math.round(total * 0.2);
    footerTotal.innerText = discountPrice;
    promoCodeInput.value = "";
  } else {
    alert("Promo Code didn't Matched. Please Try Again!!");
    promoCodeInput.value = "";
  }
});
