function calculateTile() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let tileSize = parseFloat(document.getElementById("tileSize").value);
  let waste = parseFloat(document.getElementById("waste").value) || 10;

  if (!length || !width || !tileSize) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let area = length * width;
  let tilesNeeded = Math.ceil((area / (tileSize * tileSize)) * (1 + waste/100));

  document.getElementById("result").innerText = 
    `You need approximately ${tilesNeeded} tiles (including ${waste}% extra).`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${tilesNeeded} tiles <a href="https://example.com/tiles-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Grout 1 bag <a href="https://example.com/grout-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Tile spacers <a href="https://example.com/spacers-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
    </ul>
  `;
}
