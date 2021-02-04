const getHandler = (req, res) => {
  console.info(req);
  res.status(200).send({
    data: {
      error: null,
      message: '',
      stats: {},
    }
  });
};

module.exports = { getHandler };
