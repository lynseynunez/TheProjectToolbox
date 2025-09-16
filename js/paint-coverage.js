function calculatePaint() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let height = parseFloat(document.getElementById("height").value);
  let doors = parseInt(document.getElementById("doors").value) || 0;
  let coats = parseInt(document.getElementById("coats").value) || 1;
  let coverage = parseFloat(document.getElementById("coverage").value) || 350;

  if (!length || !width || !height) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let wallArea = 2 * height * (length + width);
  let doorWindowArea = doors * 20; // average 20 sq ft per door/window
  let totalArea = wallArea - doorWindowArea;
  let gallonsNeeded = (totalArea * coats) / coverage;
  let totalGallons = Math.ceil(gallonsNeeded * 1.1); // add 10% extra

  document.getElementById("result").innerText =
    `You need approximately ${totalGallons} gallons of paint (including 10% extra).`;
}
