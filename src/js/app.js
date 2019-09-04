const findBy = (prop, val) => (function (character) {
  return character[prop] === val;
});

export default findBy;
