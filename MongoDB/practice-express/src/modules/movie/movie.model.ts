import { Schema, model } from "mongoose";
import { Movie, Review } from "./movie.interface";

const reviewSchema = new Schema<Review>({
  comment: String,
  rating: String,
  email: String,
});

const movieSchema = new Schema<Movie>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  reviews: [reviewSchema],
});

movieSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

movieSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

movieSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
});

export const MovieModel = model<Movie>("Movie", movieSchema);
