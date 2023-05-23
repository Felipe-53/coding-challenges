function optimalTwoSum(nums: number[], target: number): number[] | undefined {
  const numbersMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const missing = target - number;
    const index = numbersMap.get(missing);
    if (index !== undefined) {
      return [i, index];
    } else {
      numbersMap.set(number, i);
    }
  }
}

function bruteForceTwoSum(nums: number[], target: number): number[] {
  const indices: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        indices.add(i);
        indices.add(j);
      }
    }
  }

  return Array.from(indices.values());
}
