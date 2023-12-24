import { endOfMonth, endOfWeek, getDay, parse, startOfWeek } from 'date-fns';

import { DATE_FORMAT } from './constants';

export const getStartAndEndDates = (currentMonth: string) => {
  // Parse the current month to get the first day of the month
  const firstDayCurrentMonth = parse(currentMonth, DATE_FORMAT, new Date());

  // Get the start day, if it's not Monday, set it to the start of the week
  let startDay = firstDayCurrentMonth;
  if (getDay(startDay) !== 1) {
    startDay = startOfWeek(startDay, { weekStartsOn: 1 });
  }

  // Get the end day, if it's not the end of the week, set it to the end of the month
  const endDay =
    endOfWeek(endOfMonth(firstDayCurrentMonth)) <= endOfMonth(firstDayCurrentMonth)
      ? endOfWeek(endOfMonth(firstDayCurrentMonth))
      : endOfMonth(firstDayCurrentMonth);

  return { startDay, endDay };
};
