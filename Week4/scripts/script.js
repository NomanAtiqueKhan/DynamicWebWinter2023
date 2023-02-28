function getLoop() {
  for (var x = 0; x < 5; x++) {
    for (var y = x; y < 5; y++) {
      document.write(`${x}`);
    }
    document.write(`<br>`);
  }
}

function getShapes() {
  var side = 0;
  var row = 1;
  var col = 1;
  var symbol = "*";

  symbol = prompt("Enter the symbol for the pattern", " ");

  side = prompt("How big is the side of the square, enter a positive");
  side = parseInt(side);

  while (side < 1) {
    side = prompt("How big is the side of the square, enter a positive");
    side = parseInt(side);
  }

  for (row = 1; row <= side; row++) {
    for (col = 1; col <= side; col++) {
      document.write(symbol + " ");
    }
    document.write("<br>");
  }
}

function changePicture() {
  document.getElementById("p1").innerHTML = "New Car";
  document.getElementById("car").src = "./images/car.jpeg";
}

function changePictureB() {
  document.getElementById("car").src = "./images/car2.jpeg";
}
