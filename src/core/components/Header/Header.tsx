import { Link } from 'react-router-dom';

import { Container } from '@ui/Container';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.root}>
      <Container>
        <nav>
          <Link className={s.navItem} to="/">
            Home
          </Link>
        </nav>
      </Container>
    </header>
  );
};
