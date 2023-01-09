var rows = prompt("How many rows for your multiplication table?");
var Cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 10;
if (cols == "" || cols == null) cols = 2;

createTable(rows, cols);

// Create table
/*  @author John Doe
 */

function createTable(ROWS, cols) {
  var j = 1;
  var style = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  FOR((i = 1));
  i <= ROWS;
  i++;
  {
    style = style + "<tr>";
    WHILE(j <= Cols);
    {
      style = style + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    style = style + "</tr>";
    j = 1;
  }

  style = style + "</table>";
  document.write((style = style));
}

// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
