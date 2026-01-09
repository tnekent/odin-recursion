function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, half);
  const rightPart = arr.slice(half, arr.length);

  const sortedLeftPart = mergeSort(leftPart);
  const sortedRightPart = mergeSort(rightPart);

  const sortedMerged = [];
  for (let i = 0, j = 0; sortedMerged.length < arr.length; ) {
    const left = sortedLeftPart[i];
    const right = sortedRightPart[j];
    if (typeof right !== "number" || left <= right) {
      sortedMerged.push(left);
      i += 1;
    } else if (typeof left !== "number" || left > right) {
      sortedMerged.push(right);
      j += 1;
    }
  }

  return sortedMerged;
}

const sorted = mergeSort([105, 79, 100, 110]);
console.log(sorted);
