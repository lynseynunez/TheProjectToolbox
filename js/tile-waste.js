function calculate() {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let tile = document.getElementById("tile").value;

  if (!length || !width || !tile) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let tileFt = tile / 12;
  let roomArea = length * width;
  let tileArea = tileFt * tileFt;

  let tilesNeeded = Math.ceil(roomArea / tileArea);
  let wasteTiles = Math.ceil(tilesNeeded * 0.1);
  let totalTiles = tilesNeeded + wasteTiles;

  document.getElementById("result").innerText =
    `You need about ${totalTiles} tiles (including 10% extra for waste).`;
}
