// Mock data for movies and TV shows used during this sprint (no external API calls)

export type MediaItem = {
  id: string;
  title: string;
  year: number;
  synopsis: string;
  genres: string[];
  runtime?: number; // minutes
  rating?: string;
  director?: string;
  cast?: string[];
  image?: string; // poster image URL
  backdrop?: string;
  [key: string]: any;
};

export const movies: MediaItem[] = [
  {
    id: 'movie-1',
    title: 'The Last Horizon',
    year: 2021,
    synopsis:
      'A small crew embarks on a dangerous mission to chart the uncharted edge of the galaxy, discovering unexpected secrets about humanity along the way.',
    genres: ['Sci-Fi', 'Adventure'],
    runtime: 132,
    rating: 'PG-13',
    director: 'A. Director',
    cast: ['Jane Doe', 'John Smith', 'Alex Roe'],
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=80&auto=format&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80&auto=format&fit=crop'
  },
  {
    id: 'movie-2',
    title: 'Echoes of Autumn',
    year: 2019,
    synopsis: 'A touching family drama about memory, reconciliation and the passage of time.',
    genres: ['Drama'],
    runtime: 98,
    rating: 'R',
    director: 'B. Filmmaker',
    cast: ['Alice Lane', 'Mark Vale'],
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80&auto=format&fit=crop'
  }
];

export const tvShows: MediaItem[] = [
  {
    id: 'tv-1',
    title: 'City Lights',
    year: 2020,
    synopsis:
      'An ensemble drama set in a bustling metropolitan city that follows the intersecting lives of several residents.',
    genres: ['Drama', 'Mystery'],
    runtime: 45,
    rating: 'TV-MA',
    director: 'Various',
    cast: ['S. Performer', 'T. Actor'],
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80&auto=format&fit=crop'
  },
  {
    id: 'tv-2',
    title: 'Quest Academy',
    year: 2022,
    synopsis: 'A coming-of-age fantasy series about students who discover hidden powers at a secret academy.',
    genres: ['Fantasy', 'Adventure'],
    runtime: 50,
    rating: 'TV-14',
    cast: ['Nina Star', 'Rob Green'],
    image: 'https://images.unsplash.com/photo-1526312426976-53d4ae0d1a78?w=800&q=80&auto=format&fit=crop'
  }
];

// Keep only named exports to satisfy lint rules
