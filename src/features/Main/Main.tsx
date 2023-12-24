import { Grid } from '@ui/Grid';

import { CalendarWidget } from './components/CalendarWidget';
import { WelcomeWidget } from './components/WelcomeWidget';

import s from './Main.module.css';

export const Main = () => {
  return (
    <div>
      <Grid className={s.grid}>
        <WelcomeWidget />
        <CalendarWidget />
      </Grid>
    </div>
  );
};
