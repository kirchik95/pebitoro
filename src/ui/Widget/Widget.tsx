import cn from 'classnames';

import s from './Widget.module.css';

interface WidgetProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Widget = ({ className, children, style }: WidgetProps) => {
  return (
    <div className={cn(s.root, className)} style={style}>
      {children}
    </div>
  );
};
