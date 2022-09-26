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
  cuisine: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  // ingredients: {[
  ingredient1: {
    type: String,
    required: true,
  },
  ingredient2: {
    type: String,
    required: true,
  },
  ingredient3: {
    type: String,
    required: true,
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
  //]},
  step1: {
    type: String,
    required: true,
  },
  step2: {
    type: String,
    required: true,
  },
  step3: {
    type: String,
    required: true,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", PostSchema);
