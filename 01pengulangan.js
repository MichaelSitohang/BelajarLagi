//modul bawaan node.js yaitu modul file system (fs) yang memiliki
const fs = require("fs");

fs.writeFile(
  "jawaban01.txt",
  "harry,harmoine,ron akan masuk ke file jawaban01.txt",
  (err) => {
    if (err) throw err;
    console.log("data berhasil ditulis");
  }
);

fs.readFile("jawaban01.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
