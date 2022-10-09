"use strict";
  let colorWhite = "rgb(248, 241, 241)";
let colorGrey = "rgb(99, 97, 97)";
  
window.addEventListener("keydown", function (event) {
  // let inp = [];
  // let keyCode = event.keyCode;
  console.log("Event", event);
   // console.log("Event", window);
  console.log("Key code", event.keyCode);
  // console.log(keyCode);
  let row = document.querySelectorAll(".row");




  

 
  if (event.keyCode === 16) {    //shift
    let shift = document.querySelectorAll(".shift");
    for (let i = 0; i < shift.length - 1; i += 1) {
      if (event.code === "ShiftLeft") {
        shift[0].style.backgroundColor = colorGrey;
      } else {
        shift[1].style.backgroundColor = colorGrey;
      }
    }
    
    window.addEventListener("keyup", resetStyle);
  } else if (event.keyCode == 9) { //tab
    document.getElementById("input").innerHTML += `&nbsp&nbsp&nbsp`;
    event.returnValue = false;
    document.querySelector(".tab").style.backgroundColor = colorGrey;
    window.addEventListener("keyup", resetStyle);
  } else if (event.keyCode === 8) {    //backspace
    
         document.getElementById("input").innerText = document
           .getElementById("input")
           .innerText.split("")
           .splice(0, document.getElementById("input").innerText.length - 1)
           .join("");
    document.querySelector(".backspace").style.backgroundColor = colorGrey;
    document.querySelector(".backspace").style.color = 'blue';
    window.addEventListener("keyup", resetStyle);

    // з глузду з'їхати можна...
  } else if (event.keyCode === 32) {    //space
    document.getElementById("input").innerHTML += `\u00A0`;
    document.querySelector(".space").style.backgroundColor = colorGrey;
    event.returnValue = false;
  } else if (event.keyCode === 20) {    //capslock
    if (document.querySelector(".capslock").style.backgroundColor == colorGrey) {
      document.querySelector(".capslock").style.backgroundColor = colorWhite;
    } else {
      document.querySelector(".capslock").style.backgroundColor = colorGrey;
    }
    
    // document.getElementById("input").innerHTML += innerHTML.toUpperCase();
  } else if (event.keyCode === 13) {       //enter
    document.getElementById("input").innerHTML += `<br>`;
document.querySelector(".enter").style.backgroundColor = colorGrey;
  } else if (this.document) {
    document.getElementById("input").innerHTML += event.key;
    pressStyle();
  }

  for (let i = 0; i < row.length; i++) {
    if (event.keyCode === 192) {
      document.querySelectorAll(".row")[0].style.backgroundColor = colorGrey;
    }
    if (event.keyCode === 49) {
      document.querySelectorAll(".row")[1].style.backgroundColor = colorGrey;
      window.addEventListener("keyup", resetStyle);  
    }
  }

    function pressStyle() {
      let pressStyle = document.querySelectorAll(".row");
      // console.log(event.keyCode);
      // console.log(pressStyle.length);
      // console.log(pressStyle);
      
      for (let i = 0; i < pressStyle.length; i += 1) {
        console.log(pressStyle[i].outerText);
        console.log(event.key);
        if (
          event.key === pressStyle[i].outerText) {
          pressStyle[i].style.backgroundColor = colorGrey;
          pressStyle[i].style.fontSize = `40px`;
          pressStyle[i].style.color = colorWhite;
          window.addEventListener("keyup", resetStyle);
        } else if (event.key === pressStyle[i].outerText.toUpperCase()) {
          pressStyle[i].style.backgroundColor = colorGrey;
        }
      }
  }
  
    function resetStyle() {
      let resetStyle = document.querySelectorAll(".row");
      for (let i = 0; i < resetStyle.length; i += 1) {
        if (resetStyle[i].style.backgroundColor === colorGrey) {
          resetStyle[i].style.backgroundColor = colorWhite;
          resetStyle[i].style.color = "black";
          resetStyle[i].style.fontSize = `16px`;
        }
      }
    }


});

