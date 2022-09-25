const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  ingredient1: {
    type: String,
    required: true,
  },
  ingredient2: {
    type: String,
    required: false,
  },
  ingredient3: {
    type: String,
    required: false,
  },
  ingredient4: {
    type: String,
    required: false,
  },
  ingredient5: {
    type: String,
    required: false,
  },
  ingredient6: {
    type: String,
    required: false,
  },
  ingredient7: {
    type: String,
    required: false,
  },
  ingredient8: {
    type: String,
    required: false,
  },
  ingredient9: {
    type: String,
    required: false,
  },
  ingredient10: {
    type: String,
    required: false,
  },
  step1: {
    type: String,
    required: true,
  },
  step2: {
    type: String,
    required: false,
  },
  step3: {
    type: String,
    required: false,
  },
  step4: {
    type: String,
    required: false,
  },
  step5: {
    type: String,
    required: false,
  },
  step6: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
