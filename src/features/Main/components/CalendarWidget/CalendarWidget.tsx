import * as React from 'react';
import { add, eachDayOfInterval, format, getDay, isSameMonth, parse, startOfDay } from 'date-fns';
import cn from 'classnames';

import { Button } from '@ui/Button';
import { Widget } from '@ui/Widget';

import { Svg } from '@shared/Svg';

import { DATE_FORMAT } from './constants';
import { getStartAndEndDates } from './helpers';

import s from './CalendarWidget.module.css';

interface CalendarWidgetProps {
  className?: string;
}

export const CalendarWidget = ({ className }: CalendarWidgetProps) => {
  const [currentMonth, setCurrentMonth] = React.useState(format(new Date(), 'MMMM yyyy'));

  const { startDay, endDay } = getStartAndEndDates(currentMonth);
  const firstDayCurrentMonth = parse(currentMonth, DATE_FORMAT, new Date());
  const today = startOfDay(new Date());

  const days = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });

  const handlePreviousMonth = () => {
    const prevMonth = add(firstDayCurrentMonth, { months: -1 });

    setCurrentMonth(format(prevMonth, DATE_FORMAT));
  };

  const handleNextMonth = () => {
    const prevMonth = add(firstDayCurrentMonth, { months: 1 });

    setCurrentMonth(format(prevMonth, DATE_FORMAT));
  };

  return (
    <Widget className={cn(s.root, className)}>
      <div className={s.header}>
        <Button className={s.button} theme="secondary" onClick={handlePreviousMonth}>
          <Svg name="chevron" width={20} height={20} />
        </Button>
        <div className={s.title}>
          <div className={s.month}>{format(firstDayCurrentMonth, 'MMMM')}</div>
          <div className={s.year}>{format(firstDayCurrentMonth, 'yyyy')}</div>
        </div>
        <Button className={s.button} theme="secondary" onClick={handleNextMonth}>
          <Svg name="chevron" width={20} height={20} />
        </Button>
      </div>
      <div className={s.days}>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
      <div className={s.content}>
        {days.map((day) => (
          <div
            key={day.toString()}
            className={cn(s.day, {
              [s.today]: day.getTime() === today.getTime(),
              [s.otherMonth]: !isSameMonth(day, today),
            })}
            style={{ gridColumnStart: getDay(day) === 0 ? 7 : getDay(day) }}
          >
            <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
          </div>
        ))}
      </div>
    </Widget>
  );
};
