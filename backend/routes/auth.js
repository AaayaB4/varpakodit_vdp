// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { checkJwt, handleUser } = require('../middleware/auth');

// GET /api/auth/me
router.get('/me', checkJwt, handleUser, async (req, res) => {
  try {
    // The user document is now available as req.dbUser
    const user = req.dbUser;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data including isAdmin
    res.json({
      auth0Id: user.auth0Id,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
