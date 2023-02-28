let csvData = `0123      ,                                 Alan Smith,5191234567, 62 inches
0124,          Bob Lee        ,519-9876543    ,        149 cm
0125         ,       Mark       Lee ,5194567890, 138 cm`;

// 1. Split the given data into an Array of rows separated by "\n"(new line)...

// 2. Each row contains infomation of user like id, name, phone number and height all separated by commas..Split each row into an Array with all of its different fields. You need to deal with extra and or no whitespaces between the commas..

// 3. Get rid of the spaces around the name field.

// 4. In the height field check if it ends with inches, if it ends with inches return the height, otherwise change the height into inches and return a string "xx inches" to the height field.

// After applying all above operations on fields, convert them into one record of ID, Name, Phone, Hight separated by the comma..

// in the end convert these three strings into a one string connected with "\n"

// function splitToRows(s) {
//   return s.split(/\r?\n/);
// }

// console.log(splitToRows(csvData));

function splitToRows(s) {
  return s.split(/\r?\n/);
}

// remove extra spaces from name field
function removeExtraSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\d{3})[\s-]?\d{3}[\s-]?\d{4}/);

  if (matches) {
    return matches[1];
  }
  return phoneNumber;

  // return matches ? matches[1] : phoneNumber;
}

function normalizeHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  }

  let cm = parseFloat(height);
  let inches = cm * 0.39;
  return `${inches.toFixed(0)} inches`;
}

function rowsToFields(row) {
  // split the row into fields
  let fields = row.split(/\s*,\s*/);

  fields[1] = removeExtraSpace(fields[1]);

  fields[2] = extractAreaCode(fields[2]);

  fields[3] = normalizeHeight(fields[3]);

  return fields.join(",");
}

function processCSV(csv) {
  // Problem-1 break the csv into rows
  let rows = splitToRows(csv);
  //   Problem -2 Split all rows into array of fields

  //   Problem 3 Extract the area code by using a regular expression from phone number field...all phone number are in one two formats"555-555-5555" or 555555555...

  // for (var i = 0; i < rows.length; i++) {
  //   let row = rows[i];
  //   let fields = rowsToFields(row);
  //   fields[1] = fields[1].replace(/\s+/, " ");

  //   let phoneNumber = fields[2];
  //   let matches = phoneNumber.match(/(\d{3})[\s-]?\d{3}[\s-]?\d{4}/);

  //   fields[2] = matches[1];

  // var data = [];
  // for (let row of rows) {
  //   let fields = rowsToFields(row);
  //   data.push(fields);
  // }

  var data = rows.map((row) => rowsToFields(row));

  return data.join("\n");
}

var processed = processCSV(csvData);
console.log(csvData);
console.log("-------------------------");
console.log(processed);
