import { Widget } from '@ui/Widget';

import WelcomeWidgetBackground from '@assets/backgrounds/background-3.jpg';

import s from './Main.module.css';

export const Main = () => {
  return (
    <div>
      <Widget className={s.welcomeWidget}>
        <div className={s.background} style={{ backgroundImage: `url(${WelcomeWidgetBackground})` }} />
        <div className={s.content}>
          <h3 className={s.title}>Good Morning, John</h3>
          <p className={s.message}>
            You have <span>6</span> tasks for today
          </p>
        </div>
      </Widget>
    </div>
  );
};
