//Chaining promises

makeAllCaps = (array) => {
    return array.map((v) => v.toUpperCase());
  };
  
  sortWords = (array) => {
    return array.sort();
  };
  
  //testing
  Promise.resolve(["tomatoes", "avocados", "cucumbers"])
    .then(makeAllCaps)
    .then(sortWords)
    .then((result) => console.log(result));