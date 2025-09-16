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
  let doorWindowArea = doors * 20;
  let totalArea = wallArea - doorWindowArea;
  let gallonsNeeded = (totalArea * coats) / coverage;
  let totalGallons = Math.ceil(gallonsNeeded * 1.1);

  document.getElementById("result").innerText =
    `You need approximately ${totalGallons} gallons of paint (including 10% extra).`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${totalGallons} gallon(s) of paint <a href="https://example.com/paint-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Paint brushes <a href="https://example.com/brush-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Roller tray <a href="https://example.com/roller-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
    </ul>
  `;
}
