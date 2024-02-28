function isOdd(a){
    return a%2==1;
  }
  function printOdd(a)
  {
    for(let i=0;i<=a;i++)
      {
        if(isOdd(i)){
          console.log(i);
        }
      }
  }
  
  printOdd(10);