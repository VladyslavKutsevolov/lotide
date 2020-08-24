const findKey = (obj, cb) => {
  return Object.keys(obj).find((el) => {
    return cb(obj[el]);
  });
};
module.exports = findKey;
