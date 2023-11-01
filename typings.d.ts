import { Session } from 'next-auth';

type UserAvatar = {
  name?: string | null;
  image?: string | null;
  className?: string;
};

type UserButton = {
  session: Session | null;
};
