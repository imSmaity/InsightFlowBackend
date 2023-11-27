const mongoose = require('mongoose');

const infoSchema = mongoose.Schema(
  {
    day: {
      type: String,
      trim: true,
      required: [true, 'Day required'],
    },
    age: {
      type: String,
      trim: true,
      required: [true, 'Age required'],
    },
    gender: {
      type: String,
      trim: true,
      required: [true, 'Gender required'],
    },
    a: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
    b: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
    c: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
    d: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
    e: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
    f: {
      type: Number,
      trim: true,
      required: [true, 'Data required'],
    },
  },
  {
    timestamps: { createdAt: 'cts', updatedAt: 'mts' },
    collection: 'info.list',
  },
);

module.exports = infoSchema;
