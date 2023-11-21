// @desc   Get all trainings
// @route  GET /api/trainings

const { request } = require("express");
const Training = require('../models/Training');

// @access Public
exports.getTrainings = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all trainings", hello: req.hello });
};
// @desc   Get single training
// @route  GET /api/trainings/:id
// @access Public
exports.getTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get training ${req.params.id}` });
};
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = async (req, res, next) => {
  try {
    const training = await Training.create(req.body);
    res.status(201).json({ success: true, data: training });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update training ${req.params.id}` });
};
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete training ${req.params.id}` });
};
