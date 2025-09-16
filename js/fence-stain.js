function calculateFenceStain() {
  let length = parseFloat(document.getElementById("length").value);
  let height = parseFloat(document.getElementById("height").value);
  let sides = parseInt(document.getElementById("sides").value);
  let coverage = parseFloat(document.getElementById("coverage").value);

  if (!length || !height || !sides || !coverage) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  let area = length * height * sides;
  let gallonsNeeded = area / coverage;
  let extra = gallonsNeeded * 0.1; // 10% extra for absorption/waste
  let totalGallons = Math.ceil(gallonsNeeded + extra);

  document.getElementById("result").innerText =
    `You need approximately ${totalGallons} gallons of stain (including 10% extra for absorption/waste).`;
}
