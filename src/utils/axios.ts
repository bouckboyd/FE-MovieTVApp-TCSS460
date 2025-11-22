import axios, { AxiosRequestConfig } from 'axios';

// next
import { getSession } from 'next-auth/react';

// ==============================|| ENVIRONMENT VALIDATION ||============================== //

if (!process.env.CREDENTIALS_API_URL) {
  throw new Error(
    'CREDENTIALS_API_URL environment variable is not set. ' +
      'Please add CREDENTIALS_API_URL to your .env and/or next.config.js file(s). ' +
      'Example: CREDENTIALS_API_URL=http://localhost:8008'
  );
}

// New API endpoints: MOVIE_WEB_API_URL and TV_WEB_API_URL
if (!process.env.MOVIE_WEB_API_URL) {
  throw new Error(
    'MOVIE_WEB_API_URL environment variable is not set. ' +
      'Please add MOVIE_WEB_API_URL to your .env and/or next.config.js file(s). ' +
      'Example: MOVIE_WEB_API_URL=http://localhost:8001'
  );
}

if (!process.env.TV_WEB_API_URL) {
  throw new Error(
    'TV_WEB_API_URL environment variable is not set. ' +
      'Please add TV_WEB_API_URL to your .env and/or next.config.js file(s). ' +
      'Example: TV_WEB_API_URL=http://localhost:8002'
  );
}

// Note: movie/tv APIs may use separate API keys. Use MOVIE_WEB_API_KEY and TV_WEB_API_KEY.

// ==============================|| CREDENTIALS SERVICE ||============================== //

const credentialsService = axios.create({ baseURL: process.env.CREDENTIALS_API_URL });

credentialsService.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.token.accessToken) {
      config.headers['Authorization'] = `Bearer ${session?.token.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

credentialsService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED') {
      const { baseURL, url, data } = error.config;
      console.error('Connection refused. The Auth/Web API server may be down. Attempting to connect to: ');
      console.error({ baseURL, url, data });
      return Promise.reject({
        message: 'Connection refused.'
      });
    } else if (error.response?.status >= 500) {
      return Promise.reject({ message: 'Server Error. Contact support' });
    } else if (error.response?.status === 401 && typeof window !== 'undefined' && !window.location.href.includes('/login')) {
      window.location.pathname = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Server connection refused');
  }
);

// ==============================|| MOVIE + TV SERVICES ||============================== //

const movieService = axios.create({ baseURL: process.env.MOVIE_WEB_API_URL });
const tvService = axios.create({ baseURL: process.env.TV_WEB_API_URL });

// Movie service interceptors (use MOVIE_WEB_API_KEY if provided)
movieService.interceptors.request.use(
  async (config) => {
    if (process.env.MOVIE_WEB_API_KEY) {
      config.headers['X-API-Key'] = process.env.MOVIE_WEB_API_KEY;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

movieService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED') {
      const { baseURL, url, data } = error.config;
      console.error('Connection refused. The Movie API server may be down. Attempting to connect to: ');
      console.error({ baseURL, url, data });
      return Promise.reject({ message: 'Connection refused.' });
    } else if (error.response?.status >= 500) {
      return Promise.reject({ message: 'Server Error. Contact support' });
    }
    return Promise.reject((error.response && error.response.data) || 'Server connection refused');
  }
);

// TV service interceptors (use TV_WEB_API_KEY if provided)
tvService.interceptors.request.use(
  async (config) => {
    if (process.env.TV_WEB_API_KEY) {
      config.headers['X-API-Key'] = process.env.TV_WEB_API_KEY;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

tvService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED') {
      const { baseURL, url, data } = error.config;
      console.error('Connection refused. The TV API server may be down. Attempting to connect to: ');
      console.error({ baseURL, url, data });
      return Promise.reject({ message: 'Connection refused.' });
    } else if (error.response?.status >= 500) {
      return Promise.reject({ message: 'Server Error. Contact support' });
    }
    return Promise.reject((error.response && error.response.data) || 'Server connection refused');
  }
);

// Backwards compatibility: `messagesService` will point to movieService so existing
// modules that import `messagesService` keep working. Prefer `movieService`/`tvService`.
const messagesService = movieService;

// ==============================|| EXPORTS ||============================== //

export default credentialsService; // Maintain backward compatibility
export { credentialsService, messagesService, movieService, tvService };

// Credentials service helpers
export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await credentialsService.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await credentialsService.post(url, { ...config });

  return res.data;
};

// Messages (backwards-compatible) + Movie/TV service helpers
export const movieFetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await movieService.get(url, { ...config });

  return res.data;
};

export const movieFetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await movieService.post(url, { ...config });

  return res.data;
};

export const tvFetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await tvService.get(url, { ...config });

  return res.data;
};

export const tvFetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await tvService.post(url, { ...config });

  return res.data;
};

// Backwards-compatible messages helpers (messagesService aliases movieService)
export const messagesFetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await messagesService.get(url, { ...config });

  return res.data;
};

export const messagesFetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await messagesService.post(url, { ...config });

  return res.data;
};
