import cn from 'classnames';

import AvatarImg from '@assets/avatars/avatar-1.png';

import s from './Avatar.module.css';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
}

export const Avatar = ({ className, src, alt = 'Avatar' }: AvatarProps) => {
  return (
    <div className={cn(s.root, className)}>
      <img src={src ?? AvatarImg} alt={alt} />
    </div>
  );
};
