import React from 'react';
import HomeLogo from '../../images/logos/home.svg';
import Link from 'next/link';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex justify-center items-center">
          <Image
            className="dark:filter dark:invert"
            src={HomeLogo}
            priority
            alt="Home icon"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
