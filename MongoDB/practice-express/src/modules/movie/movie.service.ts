import { Movie } from "./movie.interface";
import { MovieModel } from "./movie.model";

const createMovie = async (movieData: Movie) => {
  const result = await MovieModel.create(movieData);
  return result;
};

const getMovies = async () => {
  const result = await MovieModel.find();
  return result;
};

const getMovie = async (movieId: string) => {
  const result = await MovieModel.findById(movieId);
  return result;
};

const updateMovie = async (movieId: string, movieData: Movie) => {
  const result = await MovieModel.findByIdAndUpdate(movieId, movieData, {
    new: true,
  });
  return result;
};

const deleteMovie = async (movieId: string) => {
  const result = await MovieModel.updateOne(
    { _id: movieId },
    { isDeleted: true }
  );
  return result;
};

export const MovieServices = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
