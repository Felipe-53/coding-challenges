function lengthOfLongestSubstring(inputString: string): number {
  let biggest = 0;

  for (let begin = 0; begin < inputString.length; begin++) {
    if (biggest >= inputString.length - begin) break;

    const seen: Set<string> = new Set();

    let i: number;
    for (i = begin; i < inputString.length; i++) {
      if (seen.has(inputString[i])) {
        break;
      }

      seen.add(inputString[i]);
    }

    const substrLength = i - begin;

    if (substrLength > biggest) {
      biggest = substrLength;
    }
  }

  return biggest;
}
