import * as React from 'react';
import { add, eachDayOfInterval, format, getDay, isSameMonth, parse, startOfDay } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [direction, setDirection] = React.useState<number | undefined>();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const { startDay, endDay } = getStartAndEndDates(currentMonth);
  const firstDayCurrentMonth = parse(currentMonth, DATE_FORMAT, new Date());
  const today = startOfDay(new Date());

  const days = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });

  const handlePreviousMonth = () => {
    if (isAnimating) return;

    const prevMonth = add(firstDayCurrentMonth, { months: -1 });

    setCurrentMonth(format(prevMonth, DATE_FORMAT));
    setDirection(-1);
    setIsAnimating(true);
  };

  const handleNextMonth = () => {
    if (isAnimating) return;

    const prevMonth = add(firstDayCurrentMonth, { months: 1 });

    setCurrentMonth(format(prevMonth, DATE_FORMAT));
    setDirection(1);
    setIsAnimating(true);
  };

  const variants = {
    enter: (direction: number) => ({ x: `${100 * direction}%` }),
    middle: { x: '0%' },
    exit: (direction: number) => ({ x: `${-100 * direction}%` }),
  };

  return (
    <Widget className={cn(s.root, className)}>
      <div className={s.header}>
        <Button className={s.button} theme="secondary" onClick={handlePreviousMonth}>
          <Svg name="chevron" width={18} height={18} />
        </Button>
        <div className={s.title}>
          <div className={s.month}>{format(firstDayCurrentMonth, 'MMMM')}</div>
          <div className={s.year}>{format(firstDayCurrentMonth, 'yyyy')}</div>
        </div>
        <Button className={s.button} theme="secondary" onClick={handleNextMonth}>
          <Svg name="chevron" width={18} height={18} />
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
      <AnimatePresence mode="popLayout" initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          className={s.content}
          key={currentMonth}
          initial="enter"
          animate="middle"
          exit="exit"
          variants={variants}
          custom={direction}
          transition={{ type: 'tween' }}
        >
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
        </motion.div>
      </AnimatePresence>
    </Widget>
  );
};
