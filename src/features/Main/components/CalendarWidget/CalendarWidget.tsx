import cn from 'classnames';

import { Widget } from '@ui/Widget';

import s from './CalendarWidget.module.css';

interface CalendarWidgetProps {
  className?: string;
}

export const CalendarWidget = ({ className }: CalendarWidgetProps) => {
  return <Widget className={cn(s.root, className)}>Calendar</Widget>;
};
