

export const circularNext = (idx, a) => {
  return (idx + 1) % a.length;
};

export const circularPrev = (idx, a) => {
  return ((idx - 1) + a.length) % a.length;
};

const _rangeHelpDec = (b, e, s) => {
  if (b < e) { return []; }
  return [b].concat(_rangeHelpDec(b-s, e, s));
};

const _rangeHelpInc = (b, e, s) => {
  if (b > e) { return []; }
  return [b].concat(_rangeHelpInc(b+s, e, s));
};


export const range = (b, e, s) => {
  const step = s === undefined ? 1 : s;
  if (b === e) { return [b]; }
  if (b < e) { return _rangeHelpInc(b, e, step); }
  if (b > e) { return _rangeHelpDec(b, e, step); }
};
