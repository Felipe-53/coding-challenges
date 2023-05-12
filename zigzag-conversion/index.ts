function convert(s: string, numRows: number): string {
  if (numRows == 1) return s;

  let row = 1;

  const map: Record<number, string[]> = {};

  for (let i = 1; i <= numRows; i++) {
    map[i] = [];
  }

  let down = true;
  for (const char of s) {
    map[row].push(char);
    down ? row++ : row--;
    if (row == 1 || row == numRows) {
      down = !down;
    }
  }

  let newString = "";
  for (const key of Object.keys(map)) {
    map[key].forEach((str) => {
      newString += str;
    });
  }

  return newString;
}
