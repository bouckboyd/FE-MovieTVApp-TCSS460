// project import
import samplePage from './sample-page';
import media from './media';
import other from './other';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  // Removed the 'pages' (messages) group per request
  items: [samplePage, media, other]
};

export default menuItems;
