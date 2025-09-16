function calculateFence() {
  let length = parseFloat(document.getElementById("length").value);
  let height = parseFloat(document.getElementById("height").value);
  let coats = parseInt(document.getElementById("coats").value) || 1;

  if (!length || !height) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let area = length * height;
  let coveragePerGallon = 250;
  let gallonsNeeded = Math.ceil((area * coats) / coveragePerGallon);

  document.getElementById("result").innerText = 
    `You need approximately ${gallonsNeeded} gallons of stain.`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${gallonsNeeded} gallon(s) of stain <a href="https://example.com/stain-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>2 Brushes <a href="https://example.com/brush-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>1 Roller Tray <a href="https://example.com/roller-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
    </ul>
  `;
}
