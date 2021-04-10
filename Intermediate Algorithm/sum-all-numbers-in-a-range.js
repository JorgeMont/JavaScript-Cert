// document.getElementById("demo").innerHTML = "Hello JavaScript!";
// The global variable
function sumAll(arr) {
  let newA = arr.sort(function(a,b){
    return(a-b);
  });//Ordenado
  let ac = 0;
  for(let i = newA[0];i<=newA[1];i++){
    ac += i;
  }
  return ac;  
}

document.getElementById("demo").innerHTML = sumAll([1, 4]);
console.log(sumAll([1, 4]));
//console.log(typeof(urlSlug(" Winter Is  Coming")));
