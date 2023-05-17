import { translate } from 'common/utilities/helper';
import ISideBar from 'common/types/ISideBar';
import { Home, Account, Payment, Setting, User } from 'common/components/icons';
export const SideBarData: ISideBar[] = [
  {
    title: translate('home_page'),
    icon: <Home />,
    path: '/admin',
  },
  {
    title: translate('accounts_page'),
    icon: <Account />,
    path: '#',
  },
  {
    title: translate('payment_page'),
    icon: <Payment />,
    path: '#',
  },
  {
    title: translate('users_page'),
    icon: <User />,
    path: '/admin/users',
  },
  {
    title: translate('setting_page'),
    icon: <Setting />,
    path: '#',
  },
];
