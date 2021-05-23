let animals = ["lion", "rabiit", "mouse", "rabbit", "monkey", "lion", "ape"], 

// function to use new Set() method
function uniqueSetElements(arr){
  return unique = [...new Set(arr)]  
}

console.log(uniqueSetElements(animals));

// function to use new Set() method
function uniqueFilterElements(arr){
  let unique = arr.filter((item, index)=>{
    return arr.indexOf(item) == index;
  })
  return unique;
}

console.log(uniqueFilterElements(animals));