function twoSum(nums: number[], target: number): number[] {
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
