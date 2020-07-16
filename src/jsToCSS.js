function jtc(obj) {
  let str = JSON.stringify(obj);
  str = str.slice(1, -1);
  str = str.replace(/["']/g, '');
  // \b[A-Z]{2,}\b/g
  let arr = str.split(',');
  return arr
    .map((s) => {
      let c;
      for (let i = 0; i < str.length; i++) {
        c = s.charAt(i);
        if (!c.match(/[a-z]/i)) {
          continue;
        }
        if (c === c.toUpperCase()) {
          return `${s.slice(0, i)}-${c.toLowerCase()}${s.slice(i + 1)};`;
        }
      }
      return s + ';';
    })
    .join(' ');
}

console.log(
  jtc({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  })
);
