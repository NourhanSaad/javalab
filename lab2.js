// Task 1 

let productList = document.createElement('ul');
document.body.append(productList);

while (true) {
    let inputData = prompt("Enter Product Name", "");

    if (!inputData) {
        break;
    }

    let product = document.createElement('li');
    product.className = 'pro';
    product.textContent = (inputData); // to show html input tags 
    // product.innerHTML = String(inputData);  // don't show html input tags
    productList.append(product);
}



// Task 2 
function clear(elem) {
    elem.innerHTML = '';
}
clear(elem);