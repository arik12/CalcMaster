



const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "0"; 
    } else if (button.classList.contains("back")) {
      display.value = display.value.slice(0, -1) || "0";
    } else if (value === "=") {
      try {
       
        display.value = eval(display.value.replace("%", "/100"));
      } catch {
        display.value = "Error";
      }
    } else if (value === "+/-") {
      
      if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
      } else {
        display.value = "-" + display.value;
      }
    } else if (value === "00") {
      
      if (display.value === "0") {
        display.value = "00";
      } else {
        display.value += "00";
      }
    } else {
      if (display.value === "0" || display.value === "Error") {
        display.value = value; 
      } else {
        display.value += value; 
      }
    }
  });
});
