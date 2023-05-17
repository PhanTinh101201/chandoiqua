import { translate } from 'common/utilities/helper';
import ISideBar from 'common/types/ISideBar';
import { LoginPink } from 'common/components/icons/LoginPink';

export const SideBarUnAuthenticatedData: ISideBar[] = [
  {
    title: translate('login'),
    icon: <LoginPink />,
    path: '/admin/login',
  },
];
