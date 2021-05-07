export interface FilmCardProps {
  id: string;
  name: string;
  overview: string;
  originalName?: string;

  releaseDate: Date;
  firstAired: Date;
  img: FilmImage;
  reviews: FilmReview[];
  poster: FilmPoster;
}

export interface FilmImage {
  url: string;
}

export interface FilmPoster {
  large?: string;
  medium?: string;
  small?: string;
  tiny?: string;
  thumbnail?: string;
}

export interface FilmReview {
  id: string;
  author: string;
  content: string;
  language: string | null;
}