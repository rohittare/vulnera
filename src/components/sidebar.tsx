// src/app/components/sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, LayoutDashboard, NotebookPen, Handshake } from 'lucide-react';
import Image from 'next/image';

const userNavItems = [
  { name: 'Home', href: '/user', icon: Home },
  { name: 'Dashboard', href: '/user/dashboard', icon: LayoutDashboard },
  { name: 'Bounties', href: '/user/bounties', icon: NotebookPen },
  { name: 'Be Our Sponsors', href: '/user/sponsors', icon: Handshake },
];

const companyNavItems = [
  { name: 'Home', href: '/company', icon: Home },
  { name: 'Dashboard', href: '/company/dashboard', icon: LayoutDashboard },
  { name: 'Bounties', href: '/company/bounties', icon: NotebookPen },
  { name: 'Be Our Sponsors', href: '/company/sponsors', icon: Handshake },
];

export function Sidebar() {
  const pathname = usePathname();
  const isCompany = pathname.includes('/company');
  const navItems = isCompany ? companyNavItems : userNavItems;

  return (
    <nav className="flex h-screen w-64 flex-col justify-start border-r bg-white p-6 shadow-sm">
      <div className="flex items-center mb-8 w-full">
        <Image
          src="/navlogo.png"
          alt="Vulnera Logo"
          width={100}
          height={40}
          priority
          className="object-contain"
        />
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <div
                  className={cn(
                    'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
                    isActive
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:bg-muted',
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5',
                      // Conditionally apply purple color to the icon
                      isActive ? 'text-purple-600' : 'text-gray-500'
                    )}
                  />
                  <span
                    className={cn(
                      'font-medium',
                      
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}