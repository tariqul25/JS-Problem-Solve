// ----------------------------------------------------
// for (const element of products) {  }

// this two structre are same 

// for (i = 0; i < products.length; i++) {  const element = products[i];  }

// ----------------------------------------------------

// Problem-1: 
// WIth this problem solving we can access(with loop) an array and make another uniqueArray which didn't put any duplicate value

const products = ['laptop', 'phone', 'tablet', 'laptop', 'phone']
let uniqueProducts = []
// for access the main array
for (i = 0; i < products.length; i++) {

  const element = products[i];
  // for (const element of products) {
  
// } ;its alternative of upper 2 code: 22-24
  // console.log(element);its gives us the accesible array of product. though products array is not accesible

  // to check array value is stored or not. Is it will not it push these value
  if (!uniqueProducts.includes(element)) {
    uniqueProducts.push(element)
  }
}
console.log(uniqueProducts)



// Problem-2:
// WIth this problem solving we can access(with loop) an array and make another Array which put first array specific objects-property

const products1 = [
  { name: "laptop", categories: "Electronics", price: 40000 },
  { name: "T-shirt", categories: "Clothing", price: 250 },
  { name: "Headphones", categories: "Electronics", price: 150 },
  { name: "Jeans", categories: "Clothing", price: 400 },
];
// To store an array specific objects-property
let categorizedProduct = {
  electronics: [],
  clothing: [],
};
// To acces the product array
for (const product of products1) {
  
  // for specific category check
  if (product.categories === "Electronics") {
    categorizedProduct.electronics.push(product.categories);
  } else if (product.categories === "Clothing") {
    categorizedProduct.clothing.push(product.categories);
  }
}

console.log(categorizedProduct);



// Problem-3: 
// With this problem we will be able to convert an string into array.and acces it also check it store any Nan and space value. Finally sum the string which is converted into an array

let price = "$249";

// string to array convertion
let chars = price.split("");
let sum = 0
// to access array which is chars.
for (const element of chars) {
  
  // check chars array for checkout is array store any Nan and space value.Is it not store. its condition store sum for this chars array
  if (!isNaN(element) && element !== " ") {
    // parseInt for convert string value into integer
    sum += parseInt(element);
  }
}
console.log(sum)

