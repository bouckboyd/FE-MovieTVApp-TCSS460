// third-party
import { FormattedMessage } from 'react-intl';

// icons
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';

// type
import { NavItemType } from 'types/menu';

const icons = { MovieIcon, LiveTvIcon };

// ==============================|| MENU ITEMS - MEDIA ||============================== //

const media: NavItemType = {
  id: 'group-media',
  title: <FormattedMessage id="media" defaultMessage="Media" />,
  type: 'group',
  children: [
    {
      id: 'movies',
      title: <FormattedMessage id="movies" defaultMessage="Movies" />,
      type: 'item',
      url: '/movies',
      icon: icons.MovieIcon
    },
    {
      id: 'tv-shows',
      title: <FormattedMessage id="tv-shows" defaultMessage="TV Shows" />,
      type: 'item',
      url: '/tv',
      icon: icons.LiveTvIcon
    }
  ]
};

export default media;
