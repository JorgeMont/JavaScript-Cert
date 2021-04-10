function translatePigLatin(str) {
  const regVowel = new RegExp('\\b([aeiou])(\w)*','gi');
  // const regCons = new RegExp('(^[^aeiou]+)(\w*)','gi');
  if(regVowel.test(str)){
    return (str.replace(regVowel, "$1$2")).concat("way");
  }
  else if(regVowel.test(str) == false){
    return str.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }

}


document.getElementById("demo").innerHTML = 
translatePigLatin("algorithm");
console.log(translatePigLatin("Expression"));
console.log(typeof(translatePigLatin("consonant")));

