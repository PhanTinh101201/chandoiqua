import { Logo } from 'common/components/icons';
import { SideBarData } from './sideBarData';
import { SideBarUnAuthenticatedData } from './sideBarUnAuthenticatedData';
import SubMenu from './subMenu';

export default function SideBar({ isAuth }: { isAuth: boolean }) {
  const sideBarList = isAuth ? SideBarData : SideBarUnAuthenticatedData;

  return (
    <div className="w-[350px] bg-primary-light-100 px-9 flex flex-col flex-shrink-0 justify-between fixed top-0 left-0 bottom-0">
      <div className="pb-12">
        <div className="mt-[53px]" />
        <Logo />
        <div className={`h-[1px] w-full bg-primary-light-200 mt-8 mr-1 ${isAuth && 'mb-4'}`} />
        {sideBarList.map((item, key) => (
          <SubMenu key={key} item={item} lastItem={sideBarList.length == key + 1 && !isAuth} />
        ))}
      </div>
    </div>
  );
}
