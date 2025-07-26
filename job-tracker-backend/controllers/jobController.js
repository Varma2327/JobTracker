const Job = require('../models/Job');

const getJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id }).sort('-createdAt');
  res.status(200).json({ count: jobs.length, jobs });
};

const createJob = async (req, res) => {
  const { position, company } = req.body;
  req.body.createdBy = req.user.id;

  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: req.user.id },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    return res.status(404).json({ msg: 'Job not found' });
  }

  res.status(200).json({ job });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: req.user.id,
  });

  if (!job) {
    return res.status(404).json({ msg: 'Job not found' });
  }

  res.status(200).json({ msg: 'Job deleted successfully' });
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
};
