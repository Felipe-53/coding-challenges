// Optimal Solution
function maxArea(height: number[]): number {
  let maximum = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maximum = Math.max(area, maximum);
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maximum;
}

// Brute Force Solution
function maxAreaBruteForce(height: number[]): number {
  let maximum = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      maximum = Math.max(area, maximum);
    }
  }

  return maximum;
}
