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


