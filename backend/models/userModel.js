import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true, match: /^[0-9]{10}$/ },
  address: { type: String, required: true },
  resume: {
    data: Buffer,
    contentType: String,
    originalName: String
  },
  role: {
    type: String,
    required: true,
    enum: ['Web Developer', 'Backend Developer', 'Data Analyst']
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
