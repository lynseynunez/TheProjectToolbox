function calculateFence() {
  let length = parseFloat(document.getElementById("length").value);
  let height = parseFloat(document.getElementById("height").value);
  let coats = parseInt(document.getElementById("coats").value) || 1;

  if (!length || !height) {
    document.getElementById("result").innerText = "Please enter all values.";
    document.getElementById("materials").innerHTML = "";
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
      <li>${gallonsNeeded} Gallon(s) of Stain<br><a href="https://example.com/stain-affiliate" target="_blank" class="affiliate-button">Buy Stain</a></li>
      <li>Brushes (2)<br><a href="https://example.com/brush-affiliate" target="_blank" class="affiliate-button">Buy Brushes</a></li>
      <li>Roller Tray<br><a href="https://example.com/roller-affiliate" target="_blank" class="affiliate-button">Buy Roller Tray</a></li>
    </ul>
  `;
}
