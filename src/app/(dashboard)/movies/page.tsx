import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { movies } from 'data/mockMedia';

export default function MoviesPage() {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.map((m) => (
          <Grid key={m.id} item xs={12} sm={6} md={4}>
            <Card>
              {m.image && <CardMedia component="img" height="200" image={m.image} alt={m.title} />}
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">{m.title} ({m.year})</Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {m.synopsis}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button size="small" component={Link} href={`/movies/${m.id}`} variant="contained">
                      View
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
