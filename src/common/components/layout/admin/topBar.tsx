import { Button, Typography } from 'antd';
import { useSelector } from 'common/hooks';
import { IAuthState } from 'store/reducers/authentication';
import { roleLabel } from 'common/constants/role';
import { LogoutIcon } from 'common/components/icons';
import { UserCircle } from 'common/components/icons';
import { useLogout } from 'common/hooks/useLogout';

function TopBar() {
  const { handleLogout } = useLogout();

  const { authData } = useSelector((state) => ({
    authData: state.authentication as IAuthState,
  }));

  if (!authData) {
    return null;
  }

  return (
    <div className="mt-7 mb-8 self-baseline flex justify-end w-full pr-9">
      <div className="flex self-baseline">
        <div className="flex items-center p-2 bg-white rounded-lg shadow">
          <div className="ml-2 flex items-center">
            <UserCircle />
          </div>
          <Typography className="ml-2 font-bold">{authData.fullName}</Typography>
          <div className="border-0 border-l border-solid border-gray pl-4 pr-2 ml-4 text-sm">
            <Typography className="font-bold">{roleLabel[authData.role]}アカウント</Typography>
          </div>
        </div>

        <Button
          onClick={() => handleLogout()}
          className="flex items-center ml-7 p-0 h-[41px] bg-transparent border-none shadow-none"
          icon={<LogoutIcon />}
        >
          <Typography className="ml-2 font-bold underline">ログアウト</Typography>
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
