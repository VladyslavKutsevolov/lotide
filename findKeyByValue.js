const findKeyByValue = (obj, findValue) => {
  return Object.keys(obj).find((val) => obj[val] === findValue);
};
module.exports = findKeyByValue;
