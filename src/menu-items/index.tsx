// project import
import samplePage from './sample-page';
import pages from './messages';
import media from './media';
import other from './other';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [samplePage, pages, media, other]
};

export default menuItems;
