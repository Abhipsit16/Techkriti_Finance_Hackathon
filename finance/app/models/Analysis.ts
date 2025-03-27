import mongoose from 'mongoose';
import User from './User';

const AnalysisSchema = new mongoose.Schema({
  user_id: String,
  content: String,
  image_paths: [String], // Base64 encoded string
});

export default mongoose.models.Image || mongoose.model('Image', AnalysisSchema);
