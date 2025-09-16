function calculateDeck() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let boardWidth = parseFloat(document.getElementById("boardWidth").value);
  let boardLength = parseFloat(document.getElementById("boardLength").value);
  let spacing = parseFloat(document.getElementById("spacing").value);

  if (!length || !width || !boardWidth || !boardLength) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let totalWidthPerBoard = (boardWidth + spacing) / 12;
  let boardsAcross = Math.ceil(width / totalWidthPerBoard);
  let rowsAlong = Math.ceil(length / boardLength);
  let totalBoards = boardsAcross * rowsAlong;
  let screws = totalBoards * 30;

  document.getElementById("result").innerText =
    `You need approximately ${totalBoards} boards and ${screws} screws.`;

  document.getElementById("materials").innerHTML = `
    <h3>Materials Needed:</h3>
    <ul>
      <li>${totalBoards} boards <a href="https://example.com/boards-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>${screws} screws <a href="https://example.com/screws-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
      <li>Deck brackets <a href="https://example.com/brackets-affiliate" target="_blank" class="affiliate-button">Buy Now</a></li>
    </ul>
  `;
}
