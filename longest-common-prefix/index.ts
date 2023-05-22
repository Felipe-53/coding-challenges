function longestCommonPrefix(input: string[]): string {
  const str = input[0];

  let i: number;
  for (i = 0; i < str.length; i++) {
    for (let j = 1; j < input.length; j++) {
      const compare = input[j];
      if (str[i] !== compare[i]) {
        return str.slice(0, i);
      }
    }
  }
  return str.slice(0, i);
}
