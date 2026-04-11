import Link from 'next/link';
import { DesktopNavProps } from './DesktopNav.types';

const DesktopNav: React.FC<DesktopNavProps> = ({ items }) => {
  return (
    <nav aria-label="Primary" className="flex items-center gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
         rounded-md px-3 py-2 text-sm font-medium
         text-text-muted
         transition-colors
         hover:bg-surface-elevated hover:text-text
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
        "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
