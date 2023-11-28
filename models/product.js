const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    enum: {
      values: [
        "apple",
        "samsung",
        "dell",
        "lenovo",
        "hp",
        "mi",
        "nokia",
        "rolex",
        "asus",
      ],
      message: `{value} is not supported`,
    },
    required: true,
  },
  price: {
    type: Number,
    
  },
  colors: {
    type: "array",
    items: {
      type: "string",
      format: "color",
    },
  },
  image: {
    type: "array",
    items: {
      type: "string",
      format: "uri",
    },
   
  },
  description: {
    type: "string",
   
  },
  category: {
    type: "string",
    enum: ["mobile", "tablet", "laptop", "accessories", "watch", "computer"],
    
  },
  featured: {
    type: Boolean,
    default: false,
  },
  stock: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 4.9,
   
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    
  },
});
module.exports = mongoose.model("Product", productSchema);
