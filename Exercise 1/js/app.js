var firstContainer = document.getElementById("container1");
var thirdChild = firstContainer.children[2]; 

var secondContainer = document.getElementById("container2"); 
secondContainer.appendChild(thirdChild); 

var firstChildOfSecond = secondContainer.children[0]; 
secondContainer.removeChild(firstChildOfSecond); 

var newDiv = document.createElement("div");
newDiv.className = "item"; 
newDiv.textContent = "10";

var thirdContainer = document.getElementById("container3"); 
thirdContainer.appendChild(newDiv);

var blueContainers = document.getElementsByClassName("containerBlue");
for (var i = 0; i < blueContainers.length; i++) {
  blueContainers[i].style.color = "red";
}