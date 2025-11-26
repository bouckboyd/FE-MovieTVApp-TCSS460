// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function HomePage() {
  return (
    <MainCard title="Welcome to the Movie/TV App!">
      <Typography variant="body2">
        View information about your favorite movies and TV shows by navigating through the menu. 
      </Typography>
    </MainCard>
  );
}
