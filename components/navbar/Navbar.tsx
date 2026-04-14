import Link from 'next/link';
import DesktopNav from './components/desktopNav/DesktopNav';
import { NAV_ITEMS } from './Navbar.constants';

const Navbar = () => {
  //TODO: Make Links to redirect to actual different pages
  //TODO: Add Mobile Navigation
  //TODO: Make it fixed only for home, otherwise make it relative
  return (
    <header
      className="relative top-0 left-0 right-0 z-(--z-navbar) border-b backdrop-blur-sm" style={{ 
      backgroundColor: 'hsl(var(--bg) / 0.8)',
      borderColor: 'hsl(var(--border))'
    }}
    >
      <div
        className="
        mx-auto flex h-(--navbar-height) max-w-screen
        items-center justify-between
        px-(--navbar-padding-x)
        lg:px-(--navbar-padding-x-lg)
        "
      >
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/" className="shrink-0 text-text text-lg font-semibold tracking-tight">TaiyukenDev</Link>
          <div className="hidden lg:block"><DesktopNav items={NAV_ITEMS}/></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
