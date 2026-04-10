const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  contentDescription: { type: String },
  
  // Media logic
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, enum: ['image', 'video', 'audio'], required: true },
  
  // The Ground Reality Rule
  reference: { type: String, required: true }, // Book name, Page no, etc.
  category: { type: String, enum: ['Math', 'Physics', 'Chemistry', 'Biology', 'Other'], required: true },

  // Admin/Security logic
  isVerified: { type: Boolean, default: false }, // Only admin can flip this
  isReported: { type: Boolean, default: false },
  reportReason: { type: String },
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);