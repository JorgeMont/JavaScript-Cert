function convertHTML(str) {
  let htmlStr = str.split("");
  for(let i = 0; i < htmlStr.length;i++){
    if(htmlStr[i] == "&"){
      htmlStr[i] = "&amp;";
    }
    else if(htmlStr[i] == "<"){
      htmlStr[i] = "&lt;";
    }
    else if(htmlStr[i] == ">"){
      htmlStr[i] = "&gt;";
    }
    else if(htmlStr[i] == "\""){
      htmlStr[i] = "&quot;";
    }
    else if(htmlStr[i] == "'"){
      htmlStr[i] = "&apos;";
    }
  }
  return htmlStr.join("");

}



document.getElementById("demo").innerHTML = 
convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana"));
// console.log(typeof(fearNotLetter("abce")));

//& => &amp;
//< => &lt;
//> => &gt;
//" => &quot;
//' => &apos;

