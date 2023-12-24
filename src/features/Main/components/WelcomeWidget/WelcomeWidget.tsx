import cn from 'classnames';

import { Text } from '@ui/Text';
import { Widget } from '@ui/Widget';

import WelcomeWidgetBackground from '@assets/backgrounds/background-3.jpg';

import s from './WelcomeWidget.module.css';

interface WelcomeWidgetProps {
  className?: string;
}

export const WelcomeWidget = ({ className }: WelcomeWidgetProps) => {
  return (
    <Widget className={cn(className)}>
      <div className={s.background} style={{ backgroundImage: `url(${WelcomeWidgetBackground})` }} />
      <div className={s.content}>
        <h3 className={s.title}>Good Morning, John</h3>
        <Text className={s.message}>
          You have <span>6</span> tasks for today
        </Text>
      </div>
    </Widget>
  );
};
