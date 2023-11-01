'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '../UserAvatar/UserAvatar';
import { UserButton } from '@/typings';
import { Button } from '../ui/button';
import { signIn, signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';

function UserButton({ session }: UserButton) {
  if (!session) {
    return (
      <Button variant={'outline'} onClick={() => signIn()}>
        Sign In
      </Button>
    );
  }

  const name = session.user?.name;
  const image = session.user?.image;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={name} image={image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className={cn('justify-center')}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
