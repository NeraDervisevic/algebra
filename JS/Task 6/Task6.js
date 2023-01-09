let i = 1;

while (i <= 3 || i <= 20) {
  console.log("The number is " + i++);
}
if (i++ % 9) {
  console.log("");
}
