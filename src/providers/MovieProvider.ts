import {TMovie, TSection, TSectionList} from '../types/sectionsTypes';

const SECTIONS_MOCK_DATA: TSectionList = [
  {
    id: 'comedy_movies',
    title: 'Comedy Movies',
    movies: [
      {
        id: 'kung_fu_panda_4',
        title: 'Kung Fu Panda 4',
        description:
          'After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.',
      },
      {
        id: 'anyone_but_you',
        title: 'Anyone But You',
        description:
          "After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
      },
    ],
  },
  {
    id: 'action_movies',
    title: 'Action Movies',
    movies: [
      {
        id: 'dune_part_two',
        title: 'Dune: Part Two',
        description:
          'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
      },
      {
        id: 'ghostbusters_frozen_empire',
        title: 'Ghostbusters: Frozen Empire',
        description:
          'When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.',
      },
      {
        id: 'argylle',
        title: 'Argylle',
        description:
          "A reclusive author who writes espionage novels about a secret agent and a global spy syndicate realizes the plot of the new book she's writing starts to mirror real-world events, in real time.",
      },
      {
        id: 'the_fall_guy',
        title: 'The Fall Guy',
        description:
          "Colt Seavers is a stuntman who left the business a year earlier to focus on both his physical and mental health. He's drafted back into service when the star of a mega-budget studio movie, which is being directed by his ex, goes missing.",
      },
    ],
  },
  {
    id: 'tv_shows_section',
    title: 'TV Shows',
    movies: [
      {
        id: 'the_big_bang_theory',
        title: 'The Big Bang Theory',
        description:
          'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
      },
      {
        id: 'the_office',
        title: 'The Office',
        description:
          'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
      },
      {
        id: 'the_boys',
        title: 'The Boys',
        description:
          'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
      },
    ],
  },
];

const ALL_MOVIES_MOCK_DATA: Array<TMovie> = SECTIONS_MOCK_DATA.reduce<
  Array<TMovie>
>((acc, section: TSection) => {
  return [...acc, ...section.movies];
}, []);

export const fetchSectionList = (): Promise<TSectionList> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(SECTIONS_MOCK_DATA);
    }, 500 + Math.random() * 3000);
  });
};

export const fetchMoviesBySectionId = (
  sectionId: string,
): Promise<Array<TMovie>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const section = SECTIONS_MOCK_DATA.find(
        section => section.id === sectionId,
      );
      if (section) {
        resolve(section.movies);
      } else {
        reject(new Error(`Section ${sectionId} not found`));
      }
    }, 500 + Math.random() * 3000);
  });
};

export const fetchMovieById = (movieId: string): Promise<TMovie> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = ALL_MOVIES_MOCK_DATA.find(m => m.id === movieId);
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error(`Movie ${movieId} not found`));
      }
    }, 500 + Math.random() * 3000);
  });
};
