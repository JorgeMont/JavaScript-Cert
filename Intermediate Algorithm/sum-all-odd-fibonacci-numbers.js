function sumFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return (fibo.filter(n => n%2 != 0)).reduce(total);
}

document.getElementById("demo").innerHTML = 
sumFibs(4);
// console.log(sumFibs(4));
// console.log(typeof(fearNotLetter("abce")));

