import { Router } from "express";
import { MovieControllers } from "./movie.controller";

const router = Router();

router.get("/", MovieControllers.getMovies);
router.get("/:movieId", MovieControllers.getMovie);
router.post("/", MovieControllers.createMovie);
router.put("/:movieId", MovieControllers.updateMovie);
router.delete("/:movieId", MovieControllers.deleteMovie);

export const MovieRouters = router;
