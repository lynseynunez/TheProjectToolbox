function calculateConcrete() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let depth = parseFloat(document.getElementById("depth").value);
  let waste = parseFloat(document.getElementById("waste").value) || 0;

  if (!length || !width || !depth) {
    document.getElementById("result").innerText = "Please enter all values.";
    document.getElementById("materials").innerHTML = "";
    return;
  }

  let volumeCubicFt = length * width * (depth / 12);
  let volumeCubicYards = volumeCubicFt / 27;
  volumeCubicYards *= (1 + waste / 100);
  volumeCubicYards = Math.ceil(volumeCubicYards * 100) / 100;

  document.getElementById("result").innerText = 
    `You need approximately ${volumeCubicYards} cubic yards of concrete (including ${waste}% waste).`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${volumeCubicYards} Cubic Yards Concrete<br><a href="https://example.com/concrete-affiliate" target="_blank" class="affiliate-button">Buy Concrete</a></li>
      <li>Rebar (per 100 sq ft)<br><a href="https://example.com/rebar-affiliate" target="_blank" class="affiliate-button">Buy Rebar</a></li>
      <li>Concrete Mixer Rental<br><a href="https://example.com/mixer-affiliate" target="_blank" class="affiliate-button">Rent Mixer</a></li>
    </ul>
  `;
}
