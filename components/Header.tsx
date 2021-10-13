import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';
import utilStyles from '../scss/utils.module.scss';

const name = 'Hugh Nguyen';

const Header: React.FC<{ home: boolean }> = ({ home }) => {
  if (home)
    return (
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
    );

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={name}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{name}</a>
        </Link>
      </h2>
    </header>
  );
};

export default Header;
