export const longestUniqueSubsttr = (val: string) => {
  const n = val.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    const testing = new Array();

    for (let j = i; j < n; j++) {
      if (testing[val.charCodeAt(j)] == true) break;
      else {
        res = Math.max(res, j - i + 1);
        testing[val.charCodeAt(j)] = true;
      }
    }
  }
  return res;
};
