function spinalCase(str) {
  const regex = /\s|_|-/g
  //espacios, guiones o guiones bajos, una o más veces
  let newString = str.replace(/([a-z])([A-Z])/g,"$1 $2");
  //Cuando despues de una minuscula viene una mayuscula agrega un espacio
  return newString = (newString.toLowerCase()).replace(regex, "-")
  
}

document.getElementById("demo").innerHTML = 
spinalCase("thisIsSpinalTap");
console.log(spinalCase('This Is Spinal Tap'));
console.log(typeof(spinalCase('This Is Spinal Tap')));

