import React from 'react';
import Logo from '../Logo/Logo';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import UserButton from '../UserButton/UserButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';
import Link from 'next/link';
import { MessagesSquareIcon } from 'lucide-react';

type Props = {};

const Header = async (props: Props) => {
  const session = await getServerSession(authOptions);


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* languageSelect   */}
          {session ? (
            <Link href={'/chat'} prefetch={false}>
              <MessagesSquareIcon className="text-black dark:text-white" />
            </Link>
          ) : (
            <Link href={'/pricing'}>Pricing</Link>
          )}
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  );
};

export default Header;
