var playerSize = 16;
var maxVal = 75;
let numbers = [];
let form = document.getElementById("myForm");

// https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript
const uniqueNumber = maxVal => {
  const number = Math.floor(Math.random() * maxVal + 1);
  if (!numbers.includes(number)) {
    numbers.push(number);
    return number;
  } else if (numbers.length - 1 !== maxVal) {
    uniqueNumber(maxVal);
  }
};

function buildPDF() {
  var doc = new jsPDF();
  for (var i = 0; i < playerSize; i++) {
    for (var x = 0; x < 24; x++) {
      uniqueNumber(maxVal);
    }
    doc.autoTable({
      body: [
        [
          numbers[0].toString(),
          numbers[1].toString(),
          numbers[2].toString(),
          numbers[3].toString(),
          numbers[4].toString()
        ],
        [
          numbers[5].toString(),
          numbers[6].toString(),
          numbers[7].toString(),
          numbers[8].toString(),
          numbers[9].toString()
        ],
        [
          numbers[10].toString(),
          numbers[11].toString(),
          "X",
          numbers[12].toString(),
          numbers[13].toString()
        ],
        [
          numbers[14].toString(),
          numbers[15].toString(),
          numbers[16].toString(),
          numbers[17].toString(),
          numbers[18].toString()
        ],
        [
          numbers[19].toString(),
          numbers[20].toString(),
          numbers[21].toString(),
          numbers[22].toString(),
          numbers[23].toString()
        ]
      ]
    });
    numbers = [];
  }
  doc.save("table.pdf");
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  playerSize = document.getElementById("playerSize").value;
  maxVal = document.getElementById("maxVal").value;
  buildPDF();
});
