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

  let totalWidthPerBoard = (boardWidth + spacing) / 12; // in feet
  let boardsAcross = Math.ceil(width / totalWidthPerBoard);
  let rowsAlong = Math.ceil(length / boardLength);
  let totalBoards = boardsAcross * rowsAlong;
  let screws = totalBoards * 30; // rough estimate: 30 screws per board

  document.getElementById("result").innerText =
    `You need approximately ${totalBoards} boards and ${screws} screws.`;
}
