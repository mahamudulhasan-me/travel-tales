import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body.movie;
    const movies = await MovieServices.createMovie(movieData);
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieServices.getMovies();
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const movie = await MovieServices.getMovie(movieId);
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const updateMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const movieData = req.body.movie;
    const movie = await MovieServices.updateMovie(movieId, movieData);
    res.status(200).json({
      success: true,
      message: "Movie updateMovie successfully!",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const movie = await MovieServices.deleteMovie(movieId);
    res.status(200).json({
      success: true,
      message: "Movie deleted successfully!",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
