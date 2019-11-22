var theNum = "";
var oldNum = ""; 
var resultNum;
var nums = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operations");
var equals = document.getElementById("equals")
var output = document.getElementById("output")

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click",function () {
        oldNum = theNum;
        theNum = "";
        operators = this.getAttribute("data-op");

    });
};

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click",function () {
        theNum += this.getAttribute("data-value");
        result = "";
        output.innerHTML = theNum; // Display current number
        console.log(theNum);

    });
};

var allClear = document.querySelectorAll(".ac")
for (let i = 0; i < allClear.length; i++) {
    allClear[i].addEventListener("click",function () {
        var clearAll = function() {
        oldNum = "";
        theNum = "";
        output.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
        };
        document.getElementById("ac").onclick = clearAll;
    });
    
}; 

var displayNum = function() {
      oldNum = parseFloat(oldNum);
      theNum = parseFloat(theNum);
  
      switch (operators) {
        case "+":
          resultNum = oldNum + theNum;
          break;
  
        case "-":
          resultNum = oldNum - theNum;
          break;
  
        case "x":
          resultNum = oldNum * theNum;
          break;
  
        case "/":
          resultNum = oldNum / theNum;
          break;
  
        default:
          resultNum = theNum;
      }
  
      // Display result, finally!
      output.innerHTML = resultNum;
  
      // Now reset oldNum & keep result
      oldNum = 0;
      theNum = resultNum;
    };