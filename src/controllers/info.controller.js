const InfoModel = require('../models/info.model');

const getInfo = async (req, res) => {
  try {
    let select = 'day gender age a b c d e f';

    const {
      product,
      startDate,
      endDate,
      ageRange,
      gender,
      zoomStart,
      zoomEnd,
    } = req.query;
    const queryObject = {};
    const barObj = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

    if (ageRange) queryObject.age = ageRange;
    if (gender) queryObject.gender = gender;
    if (startDate && endDate) {
      queryObject.day = {
        $gte: startDate,
        $lte: endDate,
      };
    }
    if (product) select = 'day gender age ' + product;
    const info = await InfoModel.find(queryObject).select(select);
    const queryZoomStart = zoomStart ? Number(zoomStart) : 0;
    const queryZoomEnd = zoomEnd ? Number(zoomEnd) : 103;
    const modifyInfo = info.slice(queryZoomStart, queryZoomEnd + 1);
    const barInfo = (await InfoModel.find(queryObject)).slice(
      queryZoomStart,
      queryZoomEnd + 1,
    );

    barInfo.forEach((d) => {
      barObj.A = barObj.A + d.a;
      barObj.B = barObj.B + d.b;
      barObj.C = barObj.C + d.c;
      barObj.D = barObj.D + d.d;
      barObj.E = barObj.E + d.e;
      barObj.F = barObj.F + d.f;
    });

    return res.status(200).send({
      success: true,
      message: 'Fetching success',
      userMessage: 'Data fetching success',
      info: modifyInfo,
      barInfo: barObj,
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
