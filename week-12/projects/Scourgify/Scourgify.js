const fs = require('fs');
const path = require('path');
function renderCSV(csv) {
  let textLines = csv.split(/\r?\n/).slice(1)
  textLines = textLines.map((line)=>{
    line = line.split(',');
    const temp = line[0];
    line[0] = line[1];
    line[1] = temp;
    return line;
  });
  return textLines;
}
fs.readFile(path.join(__dirname, "before.csv"), "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(renderCSV(data));
});