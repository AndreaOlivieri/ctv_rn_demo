export type TSectionList = Array<TSection>;

export type TSection = {
  id: string;
  title: string;
  movies: Array<TMovie>;
};

export type TMovie = {
  id: string;
  title: string;
  description: string;
};
