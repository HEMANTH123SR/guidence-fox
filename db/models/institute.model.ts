const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  stream: { type: String, required: true },
  fees: { type: Number, required: true },
  eligibility: { type: String, required: true },
  description: { type: String, required: true },
});

const institutionSchema = new Schema(
  {
    institution_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    affiliation: { type: String, required: true },
    type: { type: String, required: true },
    ranking: { type: Number, required: true },
    description: { type: String, required: true },
    facilities: {
      library: { type: Boolean, required: true },
      hostel: { type: Boolean, required: true },
      sports: { type: Boolean, required: true },
      wifi: { type: Boolean, required: true },
    },
    website: { type: String, required: true },
    specialization: { type: Schema.Types.Mixed, required: true }, // Accepts string or false
    reviews: {
      rating: { type: Number, required: true },
      review_count: { type: Number, required: true },
    },
    courses: [courseSchema],
    universityImages: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const Institution =
  mongoose.models.Institution ||
  mongoose.model("Institution", institutionSchema);

