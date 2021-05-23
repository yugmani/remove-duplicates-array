let animals = ["lion", "rabiit", "mouse", "rabbit", "monkey", "lion", "ape"], 

// function to use new Set() method
function uniqueSetElements(arr){
  return unique = [...new Set(arr)]  
}

console.log(uniqueSetElements(animals));

// function to use arr.filter() method
function uniqueFilterElements(arr){
  return arr.filter((item, index)=>{
    return arr.indexOf(item) == index;
  })  
}

console.log(uniqueFilterElements(animals));


// function to use arr.forEach() method
function uniqueForEachElements(arr){
  let unique = [];
  arr.forEach(item=>{
    if(!unique.includes(item)){
      unique.push(item);
    }
  })
  return unique;
}

console.log(uniqueForEachElements(animals));