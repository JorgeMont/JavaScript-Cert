function isPrime(n){
  for(let i = 2;i<n;i++){
      if(n%i === 0){
        return false
      }
    }
    return true;
}

function sumPrimes(num) {
  let primos = [];
  for(let i = 2;i<=num;i++){
    if(isPrime(i)){
      primos.push(i);
    }
  }
  return primos.reduce((acc,current) => acc + current);
}

document.getElementById("demo").innerHTML = 
sumPrimes(10);
console.log(sumPrimes(10));

// console.log(typeof(fearNotLetter("abce")));

