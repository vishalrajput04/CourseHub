import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  rating: { type: String, required: true },
  details: { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true, versionKey: false });

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
