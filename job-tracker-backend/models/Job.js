const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, 'Please provide position'],
    },
    company: {
      type: String,
      required: [true, 'Please provide company'],
    },
    status: {
      type: String,
      enum: ['pending', 'interview', 'declined'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
