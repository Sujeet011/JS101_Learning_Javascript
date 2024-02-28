function arraySum(arr) {
  
    return arr.reduce((a,b) => a+b);
  }
  
  function arrayAverage(arr) {
   
    if (arr.length === 0) return 0;
    return arraySum(arr)/arr.length; 
  }
  
  
  let myArray = [1, 2, 3, 4, 5];
  console.log(arraySum(myArray));
  console.log(arrayAverage(myArray));