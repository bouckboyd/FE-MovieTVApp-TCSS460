import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { tvShows } from 'data/mockMedia';

export default function TvPage() {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        TV Shows
      </Typography>
      <Grid container spacing={3}>
        {tvShows.map((s) => (
          <Grid key={s.id} item xs={12} sm={6} md={4}>
            <Card>
              {s.image && <CardMedia component="img" height="200" image={s.image} alt={s.title} />}
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">{s.title} ({s.year})</Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {s.synopsis}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button size="small" component={Link} href={`/tv/${s.id}`} variant="contained">
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
