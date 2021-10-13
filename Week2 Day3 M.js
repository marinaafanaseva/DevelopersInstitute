let count = 0;
for (let line_no = 1; line_no <= 5; ) {
  if (count < line_no) {
    console.log("* ");
    count++;
    continue;
  }

  if (count == line_no) {
    console.log("");
    line_no++;
    count = 0;
  }
}

//using 2 loops using arrays
// let a = [
//   [, , , , ,],
//   [, , , , ,],
//   [, , , , ,],
//   [, , , , ,],
//   [, , , , ,],
// ];

// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= i; j++) {
//     a[i][j] = "*";
//   }
// }
// console.log(a);

// //using 2 loops using string

// let string = "";
// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= i; j++) {
//     string = string + "*";
//   }
//   string = string + "\n";
// }

// console.log(string);

//using 1 loops using for and if
