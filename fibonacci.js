const fibs = (n) => {
  // [0, 1] is the base case, so start with that
  let results = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    results.push(results[i - 1] + results[i]);
  }
  return results;
};

const fibsRec = (n) => {
  if (n - 1 <= 1) {
    return [0, 1];
  } else {
    const prev = fibsRec(n - 1);
    const end = prev.length - 1;
    prev.push(prev[end - 1] + prev[end]);
    return prev;
  }
};

console.log(fibs(19));
console.log(fibsRec(19));
