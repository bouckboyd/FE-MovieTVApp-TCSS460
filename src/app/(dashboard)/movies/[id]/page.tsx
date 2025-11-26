import React from 'react';
import { notFound } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import { movies } from 'data/mockMedia';

export default function MovieDetail({ params }: any) {
  const id = params.id;
  const movie = movies.find((m) => m.id === id);
  if (!movie) return notFound();

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {movie.title} ({movie.year})
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            {movie.image && <CardMedia component="img" image={movie.image} alt={movie.title} />}
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle1">Genres: {movie.genres.join(', ')}</Typography>
                <Typography variant="subtitle1">Runtime: {movie.runtime} minutes</Typography>
                <Typography variant="subtitle1">Rating: {movie.rating}</Typography>
                <Typography variant="subtitle1">Director: {movie.director}</Typography>
                <Typography variant="subtitle1">Cast: {movie.cast?.join(', ')}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{movie.synopsis}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
