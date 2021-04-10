function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let k = 0;
  for(let i = alphabet.indexOf(str.charAt(0));i < alphabet.length+1; i++){
    if(alphabet.charAt(i) != str.charAt(k)){
      console.log("b");
      return alphabet.charAt(i);
    }
    else{
      console.log(i,k);
      k += 1;
    }
  }
}



document.getElementById("demo").innerHTML = 
fearNotLetter("stvwx");
// console.log(fearNotLetter("abce"));
// console.log(typeof(fearNotLetter("abce")));

