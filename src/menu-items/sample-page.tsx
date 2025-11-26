// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import HomeOutlined from '@mui/icons-material/HomeOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { HomeOutlined };

// ==============================|| MENU ITEMS - HOME PAGE ||============================== //

const homePage: NavItemType = {
  id: 'home-page',
  title: <FormattedMessage id="home" defaultMessage="Home" />,
  type: 'group',
  url: '/home-page',
  icon: icons.HomeOutlined
};

export default homePage;
