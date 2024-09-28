const fs = require("fs");
const path = require("path");
var { AsciiTable3, AlignmentEnum } = require("ascii-table3");
function csvToTable(csv) {
  let rows = csv.split("\n");
  const headers = rows.shift().split(",");
  const table = new AsciiTable3("Sample table").setHeading(
    headers[0],
    headers[1],
    headers[2]
  ).setAlign(3, AlignmentEnum.CENTER);
  rows.pop();
  rows.slice(1).forEach((row)=>{
    const values = row.split(',');
    console.log(values)
    table.addRowMatrix([values])
  });
  return table.toString();
}

// Read CSV file
const filePath = path.join(__dirname, "regular.csv"); // Adjust the path as needed
try {
  const csvData = fs.readFileSync(filePath, "utf-8");

  // Convert CSV to array of objects
  const result = csvToTable(csvData);
  console.log(result);
} catch (error) {
  console.error("Error reading the file:", error);
}
