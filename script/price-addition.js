// kitchen card -1
function kitchenCard1() {
    const productName = document.getElementById("k-acc-1");
    const stringProductPrice = document.getElementById("k-acc-1-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// kitchen card 2
function kitchenCard2() {
    const productName = document.getElementById("k-acc-2-name");
    const stringProductPrice = document.getElementById("k-acc-2-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// kitchen card 3
function kitchenCard3() {
    const productName = document.getElementById("k-acc-3-name");
    const stringProductPrice = document.getElementById("k-acc-3-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// sportswear card 1
function sportswearCard1() {
    const productName = document.getElementById("sport-1-name");
    const stringProductPrice = document.getElementById("sport-1-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// sportswear card 2
function sportswearCard2() {
    const productName = document.getElementById("sport-2-name");
    const stringProductPrice = document.getElementById("sport-2-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// sportswear card 3
function sportswearCard3() {
    const productName = document.getElementById("sport-3-name");
    const stringProductPrice = document.getElementById("sport-3-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// furniture card 1
function furnitureCard1() {
    const productName = document.getElementById("furniture-1-name");
    const stringProductPrice = document.getElementById("furniture-1-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// furniture card 2
function furnitureCard2() {
    const productName = document.getElementById("furniture-2-name");
    const stringProductPrice = document.getElementById("furniture-2-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// furniture card 3
function furnitureCard3() {
    const productName = document.getElementById("furniture-3-name");
    const stringProductPrice = document.getElementById("furniture-3-price");

    const productPrice = parseFloat(stringProductPrice.innerText);

    addProductToCartList(productName.innerText);
    totalPriceCalculation(productPrice);
}

// remove Data
function removeAllData(){
    document.getElementById("cart-list").innerHTML = '';

    document.getElementById("total-price").innerText = '00.00';

    document.getElementById("discount").innerText = "00.00";
    
    document.getElementById("final-total").innerText = "00.00";
}
