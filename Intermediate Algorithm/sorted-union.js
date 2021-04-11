function uniteUnique(arr) {
  let united = [];
  console.log(...arguments);
  for(let arr of arguments){
    for(let elem of arr){
      if(!(united.includes(elem))){
        united.push(elem)
      }
    }
  }
  return united;
}



document.getElementById("demo").innerHTML = 
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(typeof(fearNotLetter("abce")));

