function calculateConcrete() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let depth = parseFloat(document.getElementById("depth").value);
  let waste = parseFloat(document.getElementById("waste").value) || 0;

  if (!length || !width || !depth) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let volumeCubicFeet = length * width * (depth / 12);
  let volumeCubicYards = volumeCubicFeet / 27;
  let totalVolume = volumeCubicYards * (1 + waste / 100);

  document.getElementById("result").innerText =
    `You need approximately ${totalVolume.toFixed(2)} cubic yards of concrete (including ${waste}% extra).`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${totalVolume.toFixed(2)} cubic yards of concrete <a href="https://example.com/concrete-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Concrete mixer rental <a href="https://example.com/mixer-affiliate" target="_blank" class="affiliate-button">Rent Now</a></li>
      <li>Trowel <a href="https://example.com/trowel-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
    </ul>
  `;
}
