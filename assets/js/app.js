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
const eightGB = document.getElementById("eight__gb");
const sixteenGB = document.getElementById("sixteen__gb");
const ssd256GB = document.getElementById("ssd__256gb");
const ssd512GB = document.getElementById("ssd__512gb");
const ssd1TB = document.getElementById("ssd__1tb");
const free = document.getElementById("free");
const paid = document.getElementById("paid");

// style select buttons

const isSelected = (element) => {
  return element.classList.contains("selected");
};

// memory 8 gb

eightGB.addEventListener("click", () => {
  if (!isSelected(eightGB)) {
    console.log("click");
    eightGB.classList.add("selected");
    sixteenGB.classList.remove("selected");
    memoryCost.innerText = memory8Gb;
    handleCalculateTotalCost();
  }
});

// memory 16gb

sixteenGB.addEventListener("click", () => {
  if (!isSelected(sixteenGB)) {
    eightGB.classList.remove("selected");
    sixteenGB.classList.add("selected");
    memoryCost.innerText = memory16Gb;
    handleCalculateTotalCost();
  }
});

// ssd 256gb

ssd256GB.addEventListener("click", () => {
  if (!isSelected(ssd256GB)) {
    ssd256GB.classList.add("selected");
    ssd512GB.classList.remove("selected");
    ssd1TB.classList.remove("selected");
    storageCost.innerText = ssd256Gb;
    handleCalculateTotalCost();
  }
});

// ssd 512gb

ssd512GB.addEventListener("click", () => {
  if (!isSelected(ssd512GB)) {
    ssd512GB.classList.add("selected");
    ssd256GB.classList.remove("selected");
    ssd1TB.classList.remove("selected");
    storageCost.innerText = ssd512Gb;
    handleCalculateTotalCost();
  }
});

// ssd 1td

ssd1TB.addEventListener("click", () => {
  if (!isSelected(ssd1TB)) {
    ssd1TB.classList.add("selected");
    ssd512GB.classList.remove("selected");
    ssd256GB.classList.remove("selected");
    storageCost.innerText = ssd1Tb;
    handleCalculateTotalCost();
  }
});

//free

free.addEventListener("click", () => {
  if (!isSelected(free)) {
    paid.classList.remove("selected");
    free.classList.add("selected");
    deliveryCost.innerText = freeDeliveryCost;
    handleCalculateTotalCost();
  }
});

//paid

paid.addEventListener("click", () => {
  if (!isSelected(paid)) {
    free.classList.remove("selected");
    paid.classList.add("selected");
    deliveryCost.innerText = paidDeliveryCost;
    handleCalculateTotalCost();
  }
});

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

// assignment functions

// memory price function

const handleMemoryPrice = (memory) => {
  if (memory == "eight__gb") {
    memoryCost.innerText = memory8Gb;
    handleCalculateTotalCost();
  } else {
    memoryCost.innerText = memory16Gb;
    handleCalculateTotalCost();
  }
};

// storage price function

const handleStoragePrice = (storage) => {
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
};

// delivery cost function

const handleDeliveryCost = (deliveryCharge) => {
  if (deliveryCharge == "free") {
    deliveryCost.innerText = freeDeliveryCost;
    handleCalculateTotalCost();
  } else {
    deliveryCost.innerText = paidDeliveryCost;
    handleCalculateTotalCost();
  }
};
