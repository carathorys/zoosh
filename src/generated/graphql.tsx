import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value matches the provided regular expression /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$/. */
  ISODate: any;
  /** A field whose value matches the provided regular expression /([a-z]{2})-([A-Z]{2})/. */
  LanguageCode: any;
  /** An Integer with a value between 1 and 1000 (inclusive). */
  PageRange: any;
  /** A field whose value matches the provided regular expression /^[A-Z]{2}$/. */
  RegionCode: any;
  /** An Integer with a value between 1 and 10 (inclusive). */
  ScoreMaximumRange: any;
  /** An Integer with a value between 0 and 10 (inclusive). */
  ScoreMinimumRange: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};
















export type Backdrop = Image & {
  __typename?: 'Backdrop';
  file?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  colors?: Maybe<ExtractedColors>;
  /** w300 */
  small?: Maybe<Scalars['URL']>;
  /** w780 */
  medium?: Maybe<Scalars['URL']>;
  /** w1280 */
  large?: Maybe<Scalars['URL']>;
};


export type BackdropCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type BackdropOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type BackdropSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Cast = {
  __typename?: 'Cast';
  credit: Credit;
  character: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  name: Scalars['String'];
  overview: Scalars['String'];
  parts: Array<Movie>;
  poster?: Maybe<Poster>;
  backdrop?: Maybe<Backdrop>;
  images: Array<MediaImage>;
};


export type CollectionPartsArgs = {
  language?: Maybe<Translations>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  country: Country;
  headquarters: Scalars['String'];
  parentCompany?: Maybe<Company>;
  homepage: Scalars['URL'];
  logo: Logo;
  images: Array<Logo>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Credit = {
  __typename?: 'Credit';
  id: Scalars['ID'];
  person?: Maybe<Person>;
  media: Media;
  role: CreditType;
};

export type CreditType = Cast | Crew;

export type Crew = {
  __typename?: 'Crew';
  credit: Credit;
  job: Scalars['String'];
  department: Scalars['String'];
};

/** Used to filter Dates. Has no effect if both inputs are omited. */
export type DateRangeInput = {
  /** Include from the given Date forward */
  from?: Maybe<Scalars['ISODate']>;
  /** Include up to the given Date */
  to?: Maybe<Scalars['ISODate']>;
};


export enum Direction {
  /** Ascending, ie: 1..2..3.. or A..B..C.. */
  Asc = 'ASC',
  /** Descending, ie: 3..2..1.. or C..B..A.. */
  Desc = 'DESC'
}

export type DiscoverMoviesFilter = {
  language?: Maybe<Translations>;
  region?: Maybe<Scalars['RegionCode']>;
  includeAdult?: Maybe<Scalars['Boolean']>;
  includeVideo?: Maybe<Scalars['Boolean']>;
  primaryReleaseYear?: Maybe<Scalars['Int']>;
  primaryReleaseDate?: Maybe<DateRangeInput>;
  releaseDate?: Maybe<DateRangeInput>;
  withReleaseType?: Maybe<ReleaseTypeInput>;
  year?: Maybe<Scalars['Int']>;
  voteCount?: Maybe<NumberRangeInput>;
  voteAverage?: Maybe<VoteAverageInput>;
  withCast?: Maybe<IdListInput>;
  withCrew?: Maybe<IdListInput>;
  withPeople?: Maybe<IdListInput>;
  withCompanies?: Maybe<IdListInput>;
  withGenres?: Maybe<IdListInput>;
  withKeywords?: Maybe<KeywordInput>;
  withRuntime?: Maybe<NumberRangeInput>;
  withOriginalLanguage?: Maybe<Translations>;
};

export enum DiscoverMoviesSortBy {
  Popularity = 'Popularity',
  ReleaseDate = 'ReleaseDate',
  Revenue = 'Revenue',
  PrimaryReleaseDate = 'PrimaryReleaseDate',
  OriginalTitle = 'OriginalTitle',
  VoteAverage = 'VoteAverage',
  VoteCount = 'VoteCount'
}

export type DiscoverMoviesSortInput = {
  by?: Maybe<DiscoverMoviesSortBy>;
  direction?: Maybe<Direction>;
};

export type DiscoverTvFilter = {
  language?: Maybe<Translations>;
  airDate?: Maybe<DateRangeInput>;
  firstAired?: Maybe<DateRangeInput>;
  firstAiredYear?: Maybe<Scalars['Int']>;
  includeUnaired?: Maybe<Scalars['Boolean']>;
  screenedTheatrically?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  voteAverage?: Maybe<VoteAverageInput>;
  voteCount?: Maybe<NumberRangeInput>;
  withCompanies?: Maybe<IdListInput>;
  withGenres?: Maybe<IdListInput>;
  withNetworks?: Maybe<IdListInput>;
  withRuntime?: Maybe<NumberRangeInput>;
  withOriginalLanguage?: Maybe<Translations>;
  withKeywords?: Maybe<KeywordInput>;
};

export enum DiscoverTvSortBy {
  Popularity = 'Popularity',
  FirstAirDate = 'FirstAirDate',
  VoteAverage = 'VoteAverage'
}

export type DiscoverTvSortInput = {
  by?: Maybe<DiscoverTvSortBy>;
  direction?: Maybe<Direction>;
};


export type Episode = {
  __typename?: 'Episode';
  id: Scalars['ID'];
  series: Tv;
  season: Season;
  number: Scalars['Int'];
  name: Scalars['String'];
  overview: Scalars['String'];
  aired: Scalars['DateTime'];
  cast: Array<Credit>;
  crew: Array<Credit>;
  guests: Array<Credit>;
  score: Scalars['Float'];
  votes: Scalars['Int'];
  still?: Maybe<Still>;
  images: Array<Still>;
  videos: Array<Video>;
};


export type EpisodeCastArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type EpisodeCrewArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type EpisodeGuestsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type EpisodeVideosArgs = {
  language?: Maybe<Translations>;
  filter?: Maybe<VideoFilter>;
  first?: Maybe<Scalars['Int']>;
};

export enum EpisodeVideoType {
  Trailer = 'Trailer',
  Teaser = 'Teaser',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Recap = 'Recap'
}

export type ExtractedColors = {
  __typename?: 'ExtractedColors';
  vibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lightVibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
  darkVibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
  muted?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lightMuted?: Maybe<Array<Maybe<Scalars['Int']>>>;
  darkMuted?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum Gender {
  Unknown = 'Unknown',
  Female = 'Female',
  Male = 'Male'
}

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IdListInput = {
  include?: Maybe<Array<Scalars['ID']>>;
  exclude?: Maybe<Array<Scalars['ID']>>;
};


export type Image = {
  /** The filename of the image. Used to construct URLs given a base URL and a size. */
  file?: Maybe<Scalars['String']>;
  /** Returns a URL for an image with the given dimensions or a generated SVG as either a URL or a base64 encoded data URI. */
  custom?: Maybe<Scalars['URL']>;
  /** Returns a URL for an image in it's original size or a generated SVG as either a URL or a base64 encoded data URI. */
  original?: Maybe<Scalars['URL']>;
  /** Returns either a URL to or a base64 encoded data URI of the image. */
  svg?: Maybe<Scalars['URL']>;
  /** A hash of extracted colors from the image. */
  colors?: Maybe<ExtractedColors>;
};


export type ImageCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type ImageOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type ImageSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export type Job = {
  __typename?: 'Job';
  department: Scalars['String'];
  name: Scalars['String'];
};

export type Keyword = {
  __typename?: 'Keyword';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type KeywordInput = {
  include?: Maybe<Array<Scalars['ID']>>;
  includeLogic?: Maybe<Logic>;
  exclude?: Maybe<Array<Scalars['ID']>>;
  excludeLogic?: Maybe<Logic>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  name: Scalars['String'];
};


export enum Logic {
  And = 'AND',
  Or = 'OR'
}

export type Logo = Image & {
  __typename?: 'Logo';
  file?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  colors?: Maybe<ExtractedColors>;
  /** w45 */
  icon?: Maybe<Scalars['URL']>;
  /** w92 */
  tiny?: Maybe<Scalars['URL']>;
  /** w154 */
  small?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  /** w300 */
  large?: Maybe<Scalars['URL']>;
  /** w500 */
  huge?: Maybe<Scalars['URL']>;
};


export type LogoCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type LogoOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type LogoSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export type Media = Movie | Tv;

export type MediaImage = Poster | Backdrop;

export enum MediaType {
  Movie = 'Movie',
  Tv = 'TV'
}

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  name: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  overview: Scalars['String'];
  country: Array<Country>;
  languages: Array<Language>;
  status: ReleaseStatus;
  genres: Array<Genre>;
  keywords: Array<Keyword>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  budget: Scalars['Int'];
  revenue: Scalars['String'];
  adult: Scalars['Boolean'];
  cast: Array<Credit>;
  crew: Array<Credit>;
  productionCompanies: Array<Company>;
  homepage?: Maybe<Scalars['URL']>;
  socialMedia?: Maybe<SocialMedia>;
  poster?: Maybe<Poster>;
  backdrop?: Maybe<Backdrop>;
  images: Array<MediaImage>;
  videos: Array<Video>;
  popularity: Scalars['Float'];
  score: Scalars['Float'];
  votes: Scalars['Int'];
  reviews: Array<Review>;
  collection?: Maybe<Collection>;
  recommended: Array<Movie>;
  similar: Array<Movie>;
};


export type MovieCastArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type MovieCrewArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type MovieVideosArgs = {
  language?: Maybe<Translations>;
  filter?: Maybe<VideoFilter>;
  first?: Maybe<Scalars['Int']>;
};


export type MovieReviewsArgs = {
  language?: Maybe<Translations>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['PageRange']>;
};


export type MovieCollectionArgs = {
  language?: Maybe<Translations>;
};


export type MovieRecommendedArgs = {
  language?: Maybe<Translations>;
  page?: Maybe<Scalars['PageRange']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MovieSimilarArgs = {
  language?: Maybe<Translations>;
  page?: Maybe<Scalars['PageRange']>;
  limit?: Maybe<Scalars['Int']>;
};

export enum MovieVideoType {
  Trailer = 'Trailer',
  Teaser = 'Teaser',
  Clip = 'Clip',
  Featurette = 'Featurette',
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers'
}

export type Network = {
  __typename?: 'Network';
  id: Scalars['ID'];
  name: Scalars['String'];
  country: Scalars['String'];
  headquarters: Scalars['String'];
  homepage: Scalars['URL'];
  images: Array<Logo>;
};

/** Used to filter video runtimes in Minutes */
export type NumberRangeInput = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export enum Palette {
  Vibrant = 'vibrant',
  LightVibrant = 'lightVibrant',
  DarkVibrant = 'darkVibrant',
  Muted = 'muted',
  LightMuted = 'lightMuted',
  DarkMuted = 'darkMuted'
}

export type Person = {
  __typename?: 'Person';
  id: Scalars['ID'];
  name: Scalars['String'];
  aliases: Array<Scalars['String']>;
  knownFor: Scalars['String'];
  biography: Scalars['String'];
  gender: Gender;
  birthday?: Maybe<Scalars['DateTime']>;
  birthplace?: Maybe<Scalars['String']>;
  diedOn?: Maybe<Scalars['DateTime']>;
  adult: Scalars['Boolean'];
  homepage?: Maybe<Scalars['URL']>;
  socialMedia?: Maybe<SocialMedia>;
  credits: Array<Credit>;
  workedOn: Array<Media>;
  appearsIn: Array<Media>;
  photo: Photo;
  images: Array<Photo>;
  taggedImages: Array<MediaImage>;
};


export type PersonCreditsArgs = {
  limit?: Maybe<Scalars['Int']>;
  type: Array<MediaType>;
};


export type PersonWorkedOnArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type PersonAppearsInArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type Photo = Image & {
  __typename?: 'Photo';
  file?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  colors?: Maybe<ExtractedColors>;
  /** w45 */
  small?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  /** h632 */
  large?: Maybe<Scalars['URL']>;
};


export type PhotoCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type PhotoOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type PhotoSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export type Poster = Image & {
  __typename?: 'Poster';
  file?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  colors?: Maybe<ExtractedColors>;
  /** w92 */
  thumbnail?: Maybe<Scalars['URL']>;
  /** w154 */
  tiny?: Maybe<Scalars['URL']>;
  /** w185 */
  small?: Maybe<Scalars['URL']>;
  /** w342 */
  medium?: Maybe<Scalars['URL']>;
  /** w500 */
  large?: Maybe<Scalars['URL']>;
  /** w780 */
  huge?: Maybe<Scalars['URL']>;
};


export type PosterCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type PosterOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type PosterSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  countries: Array<Country>;
  jobs: Array<Job>;
  languages: Array<Language>;
  timezones: Array<Timezone>;
  collection: Collection;
  movieGenres: Array<Genre>;
  tvGenres: Array<Genre>;
  movie: Movie;
  person: Person;
  tv: Tv;
  review: Review;
  movies: Array<Movie>;
  people: Array<Person>;
  shows: Array<Tv>;
  reviews: Array<Review>;
  latestMovie: Movie;
  latestPerson: Person;
  latestTV: Tv;
  popularMovies: Array<Movie>;
  popularPeople: Array<Person>;
  popularTV: Array<Tv>;
  search: Array<SearchResult>;
  searchMovies: Array<Movie>;
  searchPeople: Array<Person>;
  searchTV: Array<Tv>;
  discoverMovies: Array<Movie>;
  discoverTV: Array<Tv>;
  nowPlaying: Array<Movie>;
  topRatedMovies: Array<Movie>;
  upcomingMovies: Array<Movie>;
  airingThisWeek: Array<Tv>;
  airingToday: Array<Tv>;
  topRatedTV: Array<Tv>;
  trending: Array<SearchResult>;
  trendingMovies: Array<Movie>;
  trendingPeople: Array<Person>;
  trendingTV: Array<Tv>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
  language?: Maybe<Translations>;
};


export type QueryMovieGenresArgs = {
  language?: Maybe<Translations>;
};


export type QueryTvGenresArgs = {
  language?: Maybe<Translations>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
  language?: Maybe<Translations>;
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
  language?: Maybe<Translations>;
};


export type QueryTvArgs = {
  id: Scalars['ID'];
  language?: Maybe<Translations>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryMoviesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
  language?: Maybe<Translations>;
};


export type QueryPeopleArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
  language?: Maybe<Translations>;
};


export type QueryShowsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
  language?: Maybe<Translations>;
};


export type QueryReviewsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type QueryLatestMovieArgs = {
  language?: Maybe<Translations>;
};


export type QueryLatestPersonArgs = {
  language?: Maybe<Translations>;
};


export type QueryLatestTvArgs = {
  language?: Maybe<Translations>;
};


export type QueryPopularMoviesArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryPopularPeopleArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryPopularTvArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QuerySearchMoviesArgs = {
  query: Scalars['String'];
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QuerySearchPeopleArgs = {
  query: Scalars['String'];
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QuerySearchTvArgs = {
  query: Scalars['String'];
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryDiscoverMoviesArgs = {
  filter?: Maybe<DiscoverMoviesFilter>;
  sortBy?: Maybe<DiscoverMoviesSortInput>;
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryDiscoverTvArgs = {
  filter?: Maybe<DiscoverTvFilter>;
  sortBy?: Maybe<DiscoverTvSortInput>;
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryNowPlayingArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryTopRatedMoviesArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryUpcomingMoviesArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryAiringThisWeekArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryAiringTodayArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryTopRatedTvArgs = {
  page?: Maybe<Scalars['PageRange']>;
  language?: Maybe<Translations>;
};


export type QueryTrendingArgs = {
  timeframe?: Maybe<TrendingTimeframe>;
  page?: Maybe<Scalars['PageRange']>;
};


export type QueryTrendingMoviesArgs = {
  timeframe?: Maybe<TrendingTimeframe>;
  page?: Maybe<Scalars['PageRange']>;
};


export type QueryTrendingPeopleArgs = {
  timeframe?: Maybe<TrendingTimeframe>;
  page?: Maybe<Scalars['PageRange']>;
};


export type QueryTrendingTvArgs = {
  timeframe?: Maybe<TrendingTimeframe>;
  page?: Maybe<Scalars['PageRange']>;
};


export enum ReleaseStatus {
  Rumored = 'Rumored',
  Planned = 'Planned',
  InProduction = 'InProduction',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Canceled = 'Canceled'
}

export type ReleaseTypeInput = {
  /** Duplicate Release Types will be filtered */
  types?: Maybe<Array<ReleaseStatus>>;
  /** How to combine the Release Types list, default: OR */
  logic?: Maybe<Logic>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  author: Scalars['String'];
  content: Scalars['String'];
  language?: Maybe<Language>;
  media: Media;
  url: Scalars['URL'];
};



export type SearchResult = Movie | Person | Tv;

export type Season = {
  __typename?: 'Season';
  id: Scalars['ID'];
  series: Tv;
  number: Scalars['Int'];
  name: Scalars['String'];
  overview: Scalars['String'];
  aired: Scalars['DateTime'];
  cast: Array<Credit>;
  crew: Array<Credit>;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  poster?: Maybe<Poster>;
  images: Array<Poster>;
  videos: Array<Video>;
};


export type SeasonCastArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type SeasonCrewArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type SeasonVideosArgs = {
  language?: Maybe<Translations>;
  filter?: Maybe<VideoFilter>;
  first?: Maybe<Scalars['Int']>;
};

export enum SeasonVideoType {
  Trailer = 'Trailer',
  Teaser = 'Teaser',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Recap = 'Recap'
}

export type SocialMedia = {
  __typename?: 'SocialMedia';
  id: Scalars['ID'];
  imdb?: Maybe<Scalars['URL']>;
  facebook?: Maybe<Scalars['URL']>;
  instagram?: Maybe<Scalars['URL']>;
  twitter?: Maybe<Scalars['URL']>;
};

export type Still = Image & {
  __typename?: 'Still';
  file?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  colors?: Maybe<ExtractedColors>;
  /** w92 */
  small?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  /** w300 */
  large?: Maybe<Scalars['URL']>;
};


export type StillCustomArgs = {
  size?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type StillOriginalArgs = {
  svg?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};


export type StillSvgArgs = {
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Palette>;
  base64?: Maybe<Scalars['Boolean']>;
};

export type Tv = {
  __typename?: 'TV';
  id: Scalars['ID'];
  name: Scalars['String'];
  originalName: Scalars['String'];
  overview: Scalars['String'];
  country: Array<Country>;
  language: Language;
  languages: Array<Language>;
  type: TvType;
  status: TvStatus;
  genres: Array<Genre>;
  inProduction: Scalars['Boolean'];
  firstAired: Scalars['DateTime'];
  lastAired: Scalars['DateTime'];
  runtime: Array<Scalars['Int']>;
  createdBy: Array<Person>;
  cast: Array<Credit>;
  crew: Array<Credit>;
  networks: Array<Network>;
  productionCompanies: Array<Company>;
  homepage?: Maybe<Scalars['URL']>;
  socialMedia?: Maybe<SocialMedia>;
  seasonCount: Scalars['Int'];
  seasons: Array<Season>;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  poster?: Maybe<Poster>;
  backdrop?: Maybe<Backdrop>;
  images: Array<MediaImage>;
  videos: Array<Video>;
  popularity: Scalars['Float'];
  score: Scalars['Float'];
  votes: Scalars['Int'];
  reviews: Array<Review>;
  recommended: Array<Tv>;
  similar: Array<Tv>;
};


export type TvCastArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type TvCrewArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type TvVideosArgs = {
  language?: Maybe<Translations>;
  filter?: Maybe<VideoFilter>;
  first?: Maybe<Scalars['Int']>;
};


export type TvReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['PageRange']>;
};


export type TvRecommendedArgs = {
  language?: Maybe<Translations>;
  page?: Maybe<Scalars['PageRange']>;
  limit?: Maybe<Scalars['Int']>;
};


export type TvSimilarArgs = {
  language?: Maybe<Translations>;
  page?: Maybe<Scalars['PageRange']>;
  limit?: Maybe<Scalars['Int']>;
};

export enum TvStatus {
  ReturningSeries = 'ReturningSeries',
  Planned = 'Planned',
  InProduction = 'InProduction',
  Ended = 'Ended',
  Canceled = 'Canceled',
  Pilot = 'Pilot'
}

export enum TvType {
  Scripted = 'Scripted',
  Reality = 'Reality',
  Documentary = 'Documentary',
  News = 'News',
  TalkShow = 'TalkShow',
  Miniseries = 'Miniseries'
}

export enum TvVideoType {
  Trailer = 'Trailer',
  Teaser = 'Teaser',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers'
}

export type Timezone = {
  __typename?: 'Timezone';
  code: Scalars['String'];
  zone: Scalars['String'];
};

export enum Translations {
  UaeArabic = 'UAEArabic',
  SaudiArabianArabic = 'SaudiArabianArabic',
  Bulgarian = 'Bulgarian',
  Bangla = 'Bangla',
  Catalan = 'Catalan',
  Chamorro = 'Chamorro',
  Czech = 'Czech',
  Danish = 'Danish',
  German = 'German',
  Greek = 'Greek',
  English = 'English',
  Esperanto = 'Esperanto',
  Spanish = 'Spanish',
  MexicanSpanish = 'MexicanSpanish',
  Basque = 'Basque',
  Farsi = 'Farsi',
  Finnish = 'Finnish',
  CanadianFrench = 'CanadianFrench',
  French = 'French',
  Hebrew = 'Hebrew',
  Hindi = 'Hindi',
  Hungarian = 'Hungarian',
  Indonesian = 'Indonesian',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Georgian = 'Georgian',
  Kannada = 'Kannada',
  Korean = 'Korean',
  Lithuanian = 'Lithuanian',
  Malayalam = 'Malayalam',
  BokmalNorwegian = 'BokmalNorwegian',
  Dutch = 'Dutch',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  BrazilianPortuguese = 'BrazilianPortuguese',
  Portuguese = 'Portuguese',
  Romanian = 'Romanian',
  Russian = 'Russian',
  Slovak = 'Slovak',
  Slovenian = 'Slovenian',
  Serbian = 'Serbian',
  Swedish = 'Swedish',
  Tamil = 'Tamil',
  Telugu = 'Telugu',
  Thai = 'Thai',
  Turkish = 'Turkish',
  Ukrainian = 'Ukrainian',
  Vietnamese = 'Vietnamese',
  ChineseSimplified = 'ChineseSimplified',
  ChineseTraditional = 'ChineseTraditional'
}

export enum TrendingTimeframe {
  Day = 'Day',
  Week = 'Week'
}


export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  name: Scalars['String'];
  key: Scalars['String'];
  site: Scalars['String'];
  language: Language;
  country: Country;
  /** One of value: 360, 480, 720, 1080 */
  size: Scalars['Int'];
  type: VideoType;
};

export type VideoFilter = {
  site?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<VideoType>>;
};

export enum VideoType {
  Trailer = 'Trailer',
  Teaser = 'Teaser',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Recap = 'Recap'
}

/** Used to filter User Scores by Average Votes */
export type VoteAverageInput = {
  /** Integer between 0 and 10 */
  min?: Maybe<Scalars['ScoreMinimumRange']>;
  /** Integer between 1 and 10 */
  max?: Maybe<Scalars['ScoreMaximumRange']>;
};

export type GetMovieQueryVariables = Exact<{
  Id: Scalars['ID'];
}>;


export type GetMovieQuery = (
  { __typename?: 'Query' }
  & { movie: (
    { __typename?: 'Movie' }
    & Pick<Movie, 'adult' | 'name' | 'tagline' | 'overview' | 'status' | 'budget'>
    & { backdrop?: Maybe<(
      { __typename?: 'Backdrop' }
      & Pick<Backdrop, 'original' | 'large'>
    )>, keywords: Array<(
      { __typename?: 'Keyword' }
      & Pick<Keyword, 'id' | 'name'>
    )>, cast: Array<(
      { __typename?: 'Credit' }
      & Pick<Credit, 'id'>
      & { person?: Maybe<(
        { __typename?: 'Person' }
        & Pick<Person, 'id' | 'name' | 'gender' | 'birthday' | 'biography'>
      )>, role: (
        { __typename?: 'Cast' }
        & Pick<Cast, 'character'>
      ) | (
        { __typename?: 'Crew' }
        & Pick<Crew, 'job' | 'department'>
      ) }
    )>, country: Array<(
      { __typename?: 'Country' }
      & Pick<Country, 'code'>
    )>, genres: Array<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'id' | 'name'>
    )>, images: Array<(
      { __typename?: 'Poster' }
      & Pick<Poster, 'huge' | 'original' | 'custom'>
    ) | (
      { __typename?: 'Backdrop' }
      & Pick<Backdrop, 'original' | 'custom'>
    )> }
  ) }
);

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchMoviesQuery = (
  { __typename?: 'Query' }
  & { searchMovies: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'name' | 'adult' | 'overview' | 'status' | 'popularity' | 'releaseDate'>
    & { poster?: Maybe<(
      { __typename?: 'Poster' }
      & Pick<Poster, 'thumbnail'>
    )> }
  )> }
);


export const GetMovieDocument = gql`
    query getMovie($Id: ID!) {
  movie(id: $Id) {
    backdrop {
      original
      large
    }
    adult
    name
    tagline
    overview
    status
    keywords {
      id
      name
    }
    budget
    cast(limit: 5) {
      id
      person {
        id
        name
        gender
        birthday
        biography
      }
      role {
        ... on Cast {
          character
        }
        ... on Crew {
          job
          department
        }
      }
    }
    country {
      code
    }
    genres {
      id
      name
    }
    images {
      ... on Poster {
        huge
      }
      ... on Image {
        original
        custom(size: "192")
      }
    }
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const SearchMoviesDocument = gql`
    query SearchMovies($query: String!) {
  searchMovies(query: $query) {
    id
    name
    adult
    overview
    status
    popularity
    releaseDate
    poster {
      thumbnail
    }
  }
}
    `;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;