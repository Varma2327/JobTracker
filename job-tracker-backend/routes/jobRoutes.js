const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const authenticateUser = require('../middleware/auth');

router
  .route('/')
  .get(authenticateUser, getJobs)
  .post(authenticateUser, createJob);

router
  .route('/:id')
  .put(authenticateUser, updateJob)
  .delete(authenticateUser, deleteJob);

// GET a single job by ID
router.get('/:id', authenticateUser, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Optional: Ensure the job belongs to the logged-in user
    if (job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to access this job' });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error('Failed to get job by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
