// coupon checker
function couponChecker() {
    console.log('coupon clicked')
    const stringTotalPrice = document.getElementById("total-price");
    const price = parseFloat(stringTotalPrice.innerText);

    console.log(price);


    let discountAmount = 0;
    const coupon = document.getElementById("coupon-code");
    console.log(coupon);

    if (coupon.value === "SELL200") {
      discountAmount = price * 0.20;
    }

    console.log(discountAmount);

    const discountApply = document.getElementById("discount");

    const stringTotalFinalPrice = document.getElementById("final-total");
    const finalTotal = parseFloat(stringTotalFinalPrice.innerText);

    discountApply.innerText = discountAmount.toFixed(2);

    stringTotalFinalPrice.innerText = finalTotal - discountAmount;

    eraseInputField();
}

// Apply coupon
function enableApplyBtn(totalPrice) {
  console.log(totalPrice);
  if (totalPrice >= 200) {
    const couponBtn = document.getElementById("coupon-btn");
    // console.log('btn applied')
    couponBtn.removeAttribute("disabled");

    // couponChecker(totalPrice);
  }
}

// total price calculation function
function totalPriceCalculation(price) {
    const stringPrice = document.getElementById("total-price");
    const previousPrice = parseFloat(stringPrice.innerText);

    const sumPrice = previousPrice + price;

    stringPrice.innerText = sumPrice;

    const finalTotal = document.getElementById("final-total");
    finalTotal.innerText = sumPrice;

    if (sumPrice > 0) {
        const makePurchase = document.getElementById("make-purchase");
        makePurchase.removeAttribute("disabled");
    }

    if(sumPrice >= 200) {
        enableApplyBtn(sumPrice);
    }

    if(sumPrice === parseFloat(finalTotal.innerText)){
        document.getElementById('discount').innerText = '00.00'
    }
}

// add product to cart List
function addProductToCartList(productName) {
    const entry = document.getElementById("cart-list");

    const counter = entry.childElementCount;

    const p = document.createElement("p");

    p.classList.add("my-2");

    p.innerHTML = `${counter + 1}. ${productName}`;

    entry.appendChild(p);
}

// input field eraser
function eraseInputField(){
    const inputField = document.getElementById("coupon-code");
    inputField.value = '';

}