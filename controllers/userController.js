const boom = require("boom");
const User = require("../models/User");
// const mongoose = require("mongoose");
const passwordHash = require("password-hash");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    throw boom.boomify(error);
  }
};
exports.getSingleUser = async (req, res) => {
  try {
    const id = req.query.id;
    let user = await User.findById(id);
    return user;
  } catch (error) {
    throw boom.boomify(error);
  }
};
exports.createUser = async (req, res) => {
  try {
    req.body.password = passwordHash.generate(req.body.password);
    let user = new User(req.body);
    let newUser = await user.save();
    return newUser;
  } catch (error) {
    throw boom.boomify(error);
  }
};
exports.updateUser = async (req, res) => {
  console.log(req.body);
  if (req.body.password) {
    req.body.password = passwordHash.generate(req.body.password);
  }
  try {
    const id = req.body.id;
    let result = await User.findByIdAndUpdate(id, req.body, { new: true });
    return result;
  } catch (error) {
    throw new boom.boomify(error);
  }
};
exports.verifyUser = async (req, res) => {
  console.log(req.body);

  try {
    const id = req.body.id;
    let user = await User.findById(id);
    console.log(user);
    if (passwordHash.verify(req.body.password, user.password)) {
      return { success: true, user };
    }
    return { success: false };
  } catch (error) {
    throw boom.boomify(error);
  }
};
