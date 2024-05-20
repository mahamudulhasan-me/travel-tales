export interface Review {
  email: string;
  rating: number;
  comment: string;
}

export interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: Review[];
}
