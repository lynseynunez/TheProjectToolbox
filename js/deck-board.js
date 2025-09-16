function calculateDeck() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let boardWidth = parseFloat(document.getElementById("boardWidth").value);
  let boardLength = parseFloat(document.getElementById("boardLength").value);
  let spacing = parseFloat(document.getElementById("spacing").value) || 0.25;

  if (!length || !width || !boardWidth || !boardLength) {
    document.getElementById("result").innerText = "Please enter all values.";
    document.getElementById("materials").innerHTML = "";
    return;
  }

  let totalArea = length * width;
  let boardArea = boardLength * (boardWidth / 12 + spacing / 12);
  let boardsNeeded = Math.ceil(totalArea / boardArea);

  document.getElementById("result").innerText = 
    `You need approximately ${boardsNeeded} boards.`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${boardsNeeded} Deck Boards<br><a href="https://example.com/deckboard-affiliate" target="_blank" class="affiliate-button">Buy Boards</a></li>
      <li>Screws (per board)<br><a href="https://example.com/screws-affiliate" target="_blank" class="affiliate-button">Buy Screws</a></li>
      <li>Deck Sealant<br><a href="https://example.com/sealant-affiliate" target="_blank" class="affiliate-button">Buy Sealant</a></li>
    </ul>
  `;
}
