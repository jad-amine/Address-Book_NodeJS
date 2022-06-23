const test = (req, res, next) => {
  console.log("from middleware");
  next();
};

module.exports = { test };
