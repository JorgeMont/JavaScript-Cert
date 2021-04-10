function myReplace(str, before, after) {
  return str.replace(before,function(before){
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
      return after.charAt(0).toUpperCase() + after.slice(1);
    }
    else if(before.charAt(0) === before.charAt(0).toLowerCase()){
      return after.charAt(0).toLowerCase() + after.slice(1);
    }
    else{
      return after;
    }
  });
}


document.getElementById("demo").innerHTML = 
myReplace("I think we should look up there", "up", "Down");
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(typeof(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")));

