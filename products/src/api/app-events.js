module.exports = (app) => {
  app.use("/app-events", (req, res, next) => {
    const { payload } = req.body;
    console.log("---------------Received Events From Products--------------");
    return res.status(200).json(payload);
  });
};
