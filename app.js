const detailsButton = document.getElementById("detail-submit-button");

detailsButton.addEventListener("click", function() {
    const buyerDetails = document.getElementById("buyer-details-input");
    console.log("buyerDetails", buyerDetails);
    document.getElementById("buyer-info").innerText = buyerDetails.value;
    buyerDetails.value = "";
})

const addProductsButton = document.getElementById("add-details-button");
addProductsButton.addEventListener("click", function () {
    
    const infoTable = document.getElementById("info-table");
    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");

    if (itemName.value == "" || itemPrice.value < 0 || itemQuantity.value < 0 || itemPrice.value == "" || itemQuantity.value == "") {
        alert("sorry! please enter valid/positive value")
        // console.log("alas! please enter valid value");
        // return;
    }
    
    console.log(itemName.value, itemPrice.value, itemQuantity.value);

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    // console.log("total------------", totalPrice);
    // const tr = element("tr");
    // const tr = element("th");

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    td3.classList.add("item-total")
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3); //<td class="item-total">35</td>
    infoTable.appendChild(tr);

    totalCalculation();

    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
})

function element(parameter) {
    return document.createElement(parameter)
}
// var a = 2560;
// var b = 7811;

function totalCalculation() {
    const subTotal = calculateSubTotal();

    const subTotalToDisplay = document.getElementById("sub-total");
    subTotalToDisplay.innerText = subTotal;
    // console.log(subTotal);

    const tax = subTotal + .07;

    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("grand-total").innerText = subTotal + parseFloat(tax, 2);
    document.getElementById("grand-total-2").innerText = subTotal + parseFloat(tax, 2);

}

function calculateSubTotal() {

    let subTotal = 0;
    const cost = document.getElementsByClassName("item-total");

    for(let i = 0; i < cost.length; i++) {
        // const element = cost + subTotal;
        const element = cost[i] //<td class="item-total">35</td>
        const price = parseInt(element.innerText);

        subTotal = subTotal + price
        // console.log(element.innerText);
    }
    console.log("subtotal: ",subTotal);
    return subTotal;
    // console.log("cost", cost);
}