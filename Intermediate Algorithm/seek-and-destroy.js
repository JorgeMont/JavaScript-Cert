// document.getElementById("demo").innerHTML = "Hello JavaScript!";
// The global variable
function destroyer(arr) {
  let newAr = [...arr];
  for(let i = 1;i<=arguments.length-1;i++){
    newAr = newAr.filter(function(value){
      return value != destroyer.arguments[i];
    });
  }
  // newAr = arr.filter(function(value){
  //   return value != destroyer.arguments[1];
  // })
  return newAr;
}

document.getElementById("demo").innerHTML = 
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//console.log(typeof(urlSlug(" Winter Is  Coming")));
