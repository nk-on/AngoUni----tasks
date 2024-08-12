function rectengularRoom() {
  const len = Number(prompt("Enter room length"));
  const width = Number(prompt("enter room width"));
  alert(`You entered dimensions of ${len} feet and ${width}`);
  const areaSquareFeet = len * width;
  const areaSquareMetric = areaSquareFeet * 0.3048 ** 2;
  alert(`${areaSquareFeet} Feet`);
  alert(`${areaSquareMetric.toFixed(2)} Meter`);
}
rectengularRoom();
