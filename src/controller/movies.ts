import type { Request, Response } from "express";
import { MovieRepository } from "../models/movies";

const movieRepository = new MovieRepository();

const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  const movies = await movieRepository.getAll();

  if (!movies || movies.length === 0) {
    res.status(404).send();
    return;
  }

  res.json(movies);
};

const getMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  const movie = await movieRepository.getById(Number(id));

  if (!movie) {
    res.sendStatus(404);
    return;
  }

  res.json(movie);
};

const postMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, year, director, runtimeMinutes } = req.body;
  if (!title || !year || !director || !runtimeMinutes) {
    res.sendStatus(400);
    return;
  }

  try {
    movieRepository.create({ title, year, director, runtimeMinutes });
    res.sendStatus(201);
  } catch (error) {
    throw error;
  }
};

export { getAllMovies, getMovie, postMovie };
