import fs from "fs";
const filePath = "./hello.txt";

// Write to a file (synchronously)
fs.writeFile(filePath, "Hello, Node.js beginner!", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Has Been Written");
});
// Read the file (synchronously)
fs.readFile(filePath, "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File content:", result);
}); 