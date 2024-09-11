const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { writeFileSync } = require("node:fs");
const rl = readline.createInterface({ input, output });

rl.question("Siapa nama kamu?", (answer) => {
  rl.question("Berapa nomor telepon kamu?", (answer2) => {
    rl.question("alamat email kamu?", (answer3) => {
      const result = `Nama kamu : ${answer} \n dengan nomor telepon :${answer2} \n dengan email :${answer3}\n`;

      writeFileSync("jawaban.txt", result);
      consol.log("Data telah disimpan ke jawaban.txt");

      rl.close();
    });
  });
});
