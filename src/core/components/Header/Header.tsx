import { Link } from 'react-router-dom';

import { Container } from '@ui/Container';

import { Logo } from '@shared/Logo';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.root}>
      <Container>
        <nav className={s.nav}>
          <Logo />
          <Link className={s.navItem} to="/">
            Home
          </Link>
          <Link className={s.navItem} to="/tasks">
            Tasks
          </Link>
          <Link className={s.navItem} to="/statistics">
            Statistics
          </Link>
        </nav>
      </Container>
    </header>
  );
};
