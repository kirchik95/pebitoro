import cn from 'classnames';

import s from './Grid.module.css';

interface GridProps {
  className?: string;
  children: React.ReactNode;
}

export const Grid = ({ className, children }: GridProps) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};
