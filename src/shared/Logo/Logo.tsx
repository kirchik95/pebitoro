import { Link } from 'react-router-dom';

import s from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={s.root}>
      <Link to="/">Pebitoro</Link>
    </div>
  );
};
