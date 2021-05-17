// Getting all the elements
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");

var index = 0;

var toPaste;
var data = [];
var currentData;

// On click for submit button
const submitOnClick = () => {
  // Store the value of the input into variables
  part1 = box1.value.toString();
  part2 = box2.value.toString();
  part3 = box3.value.toString();
  part4 = box4.value.toString();

  str = part1 + "-" + part2 + "-" + part3 + "-" + part4;
  data.push(str);
  currentData = data[index];
  console.log(data);



  var item = document.createElement("li");
  var inputValue = str;
  var t = document.createTextNode(inputValue);
  item.appendChild(t);
  if (inputValue.value === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(item);
  }
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  document.getElementById("4").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


  let input = document.querySelector(".card-inp");
  let button = document.querySelector(".btn");
  button.disabled = true;
  input.addEventListener("change", stateHandle);
  function stateHandle() {
    if (document.querySelector(".card-inp").Value === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }

};

// Switching to next sibiling when the max number of characters exceeds
const switchElement1 = () => {
  str = box1.value.toString();
  if (str.length == 4) {
    box2.focus();
  } else if (str.length == 16) {
    valueSplit(str);
    assignValues();
  }
};
const switchElement2 = () => {
  str = box2.value.toString();
  if (str.length == 4) {
    box3.focus();
  }
  if (str.length == 0) {
    box1.focus();
  }
};
const switchElement3 = () => {
  str = box3.value.toString();
  if (str.length == 4) {
    box4.focus();
  }
  if (str.length == 0) {
    box2.focus();
  }
};
const switchElement4 = () => {
  str = box4.value.toString();
  if (str.length == 0) {
    box3.focus();
  }
};

// Split values among the inputs
const valueSplit = (str) => {
  toPaste = chunkArray(str, 4);
  // console.log(toPaste);
};

// Assigning the split values to the inputs
const assignValues = () => {
  box1.value = toPaste[0];
  box2.value = toPaste[1];
  box3.value = toPaste[2];
  box4.value = toPaste[3];
};

// Creating chunks of string
function chunkArray(arr, size) {
  var length = arr.length;
  var temp = [];
  for (i = 0; i < length; i += size) {
    piece = arr.slice(i, i + size);
    temp.push(piece);
  }
  return temp;
}

// Test String : 4567234512345678

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



let input = document.querySelector(".card-inp");
let button = document.querySelector(".btn");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".card-inp").Value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

