const findBy = (prop, val) => {
  return (function (character) {
    return character[prop] == val;
  })
};

export default findBy;
