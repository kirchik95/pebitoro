import cn from 'classnames';

import s from './Text.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg';

interface TextProps {
  size?: Size;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Text = ({ size = 'xs', children, className, onClick }: TextProps) => {
  return (
    <p className={cn(s.text, s[`text_${size}`], className)} onClick={onClick}>
      {children}
    </p>
  );
};
