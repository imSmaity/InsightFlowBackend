const InfoModel = require('../models/info.model');

const getInfo = async (req, res) => {
  try {
    const information = await InfoModel.find({});

    return res.status(200).send({
      success: true,
      message: 'Fetching success',
      userMessage: 'Data fetching success',
      info: information,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Fetching failed',
      userMessage: 'Data fetching failed',
    });
  }
};

module.exports = {
  getInfo,
};
