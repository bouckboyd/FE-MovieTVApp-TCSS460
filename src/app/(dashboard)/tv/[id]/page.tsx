import React from 'react';
import { notFound } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import { tvShows } from 'data/mockMedia';

export default function TvDetail({ params }: any) {
  const id = params.id;
  const show = tvShows.find((s) => s.id === id);
  if (!show) return notFound();

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {show.title} ({show.year})
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            {show.image && <CardMedia component="img" image={show.image} alt={show.title} />}
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle1">Genres: {show.genres.join(', ')}</Typography>
                <Typography variant="subtitle1">Episode runtime: {show.runtime} minutes</Typography>
                <Typography variant="subtitle1">Rating: {show.rating}</Typography>
                <Typography variant="subtitle1">Cast: {show.cast?.join(', ')}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{show.synopsis}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
