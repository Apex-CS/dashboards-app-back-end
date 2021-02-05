const { DATA_DAYS, DATA_MONTHS, NET_REVENUE } = require('../handlers/data_files');

const getHandler = (req, res) => {
  console.info(req);
  res.status(200).send({
    data: {
      error: {},
      message: 'ok',
      dataDays: DATA_DAYS,
      dataMonths: DATA_MONTHS,
      dataRevenue: NET_REVENUE,
    }
  });
};

module.exports = { getHandler };
