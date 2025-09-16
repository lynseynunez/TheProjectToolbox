function calculatePaint() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let height = parseFloat(document.getElementById("height").value);
  let doors = parseInt(document.getElementById("doors").value) || 0;
  let coats = parseInt(document.getElementById("coats").value) || 1;
  let coverage = parseFloat(document.getElementById("coverage").value) || 350;

  if (!length || !width || !height) {
    document.getElementById("result").innerText = "Please enter all values.";
    document.getElementById("materials").innerHTML = "";
    return;
  }

  let wallArea = 2 * height * (length + width) - doors * 20;
  let gallonsNeeded = Math.ceil((wallArea * coats) / coverage);

  document.getElementById("result").innerText = 
    `You need approximately ${gallonsNeeded} gallons of paint.`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${gallonsNeeded} Gallons of Paint<br><a href="https://example.com/paint-affiliate" target="_blank" class="affiliate-button">Buy Paint</a></li>
      <li>Paint Rollers<br><a href="https://example.com/roller-affiliate" target="_blank" class="affiliate-button">Buy Rollers</a></li>
      <li>Painter's Tape<br><a href="https://example.com/tape-affiliate" target="_blank" class="affiliate-button">Buy Tape</a></li>
    </ul>
  `;
}
