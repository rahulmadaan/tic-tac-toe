const getKey = function() {
  const key = Math.ceil(Math.random() * 10000);
  if (key.toString().length < 4) {
    getKey();
  }
  return key;
};
module.exports = getKey;
