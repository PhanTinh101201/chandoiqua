import SideBar from './sideBar';
import TopBar from './topBar';
import Footer from './footer';

export default function Layout({ children, isAuth = true }: { children: React.ReactNode; isAuth?: boolean }) {
  return (
    <div className="flex flex-col min-h-full relative">
      <div className="flex flex-1">
        <SideBar isAuth={isAuth} />
        <div className="flex flex-col flex-1 bg-[#F8F8F8] z-10 ml-[350px]">
          {isAuth && <TopBar />}
          <main className="flex flex-1 ">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
