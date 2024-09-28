var { AsciiTable3, AlignmentEnum } = require("ascii-table3");
const records = [
  {
    FirstName: "John",
    lastName: "Johnson",
    position: "manager",
    SeparationDate: 2016 - 21 - 3,
  },
  { FirstName: "Tou", lastName: "Xong", position: "Engineer" },
  { FirstName: "Michaela", lastName: "Michelson", position: "developer" },
  { FirstName: "Jake", lastName: "Jakobson", position: "manager" },
  { FirstName: "Joe", lastName: "Johnson", position: "accountant" },
  {
    FirstName: "Sally",
    lastName: "Weber",
    position: "developer",
    SeparationDate: 2016 - 21 - 3,
  },
];
function filterRecords() {
  const query = "Jo";
  const filteredRecords = records.filter((record) => {
    return record.FirstName.includes(query);
  });
  const table = new AsciiTable3("Sample table").setHeading(
    "FirstName",
    "position",
    "SeparationDate"
  ).setAlignCenter(3);
  filteredRecords.forEach((element) => {
    table.addRowMatrix([
      [element.FirstName,element.position,element?.SeparationDate],
    ]);
  });
  console.log(table.toString());
}
filterRecords();
