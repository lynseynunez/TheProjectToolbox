function calculateTile() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let tileSize = parseFloat(document.getElementById("tileSize").value);
  let waste = parseFloat(document.getElementById("waste").value) || 10;

  if (!length || !width || !tileSize) {
    document.getElementById("result").innerText = "Please enter all values.";
    document.getElementById("materials").innerHTML = "";
    return;
  }

  let area = length * width;
  let tilesNeeded = Math.ceil((area * 144) / (tileSize * tileSize) * (1 + waste / 100));

  document.getElementById("result").innerText = 
    `You need approximately ${tilesNeeded} tiles (including ${waste}% extra).`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${tilesNeeded} Tiles<br><a href="https://example.com/tile-affiliate" target="_blank" class="affiliate-button">Buy Tiles</a></li>
      <li>Grout (1 bag per 100 tiles)<br><a href="https://example.com/grout-affiliate" target="_blank" class="affiliate-button">Buy Grout</a></li>
      <li>Tile Spacers<br><a href="https://example.com/spacer-affiliate" target="_blank" class="affiliate-button">Buy Spacers</a></li>
    </ul>
  `;
}
