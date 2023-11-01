import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/typings';
import Image from 'next/image';

function UserAvatar({
  name = 'User',
  image = 'https://github.com/shadcn.png',
  className,
}: UserAvatar) {
  const avatarFallback = name ? name.split('')[0] : 'U';
  return (
    <Avatar className={cn('bg-white text-black', className)}>
      {image && (
        <Image
          src={image}
          alt={name || 'User'}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg">
        {avatarFallback}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
