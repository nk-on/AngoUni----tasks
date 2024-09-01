function twtrr(str) {
  str = str.split('');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return str
    .map((el) => {
      if (!vowels.has(el)) return el;
    })
    .join('');
}
twtrr('Twitter');
