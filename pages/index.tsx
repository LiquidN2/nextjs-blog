import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/Date';

import utilStyles from '../scss/utils.module.scss';

import { getSortedPostsData } from '../lib/posts';

type PostDataType = {
  id: string;
  date: string;
  title: string;
};

const Home: React.FC<{ allPostsData: PostDataType[] }> = ({ allPostsData }) => {
  const renderPostLinks = (posts: PostDataType[]) => {
    return posts.map(({ id, date, title }: PostDataType) => (
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    ));
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog ✍️</h2>
        <ul className={utilStyles.list}>{renderPostLinks(allPostsData)}</ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: { allPostsData },
  };
};
