const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    casts: {
      type: [String],
      required: true,
    },
    trailerUrl: {
      type: [String],
      required: true,
    },
    posterUrls: {
      type: [String],
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    releaseStatus: {
      type: String,
      required: true,
      enum: ["RELEASED", "COMING_SOON", "BLOCKED"],
    },
    imdbRating: {
      type: Number,
    },
    genre: {
      type: [String],
      enum: ["COMEDY", "THRILLER", "DRAMA", "SCI-FI", "HORROR", "ACTION"],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Movie", movieSchema);
