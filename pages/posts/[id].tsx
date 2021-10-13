import React from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Date from '../../components/Date';

import { getAllPostIds, getPostData } from '../../lib/posts';

import utilStyles from '../../scss/utils.module.scss';

interface PostDataType {
  title: string;
  date: string;
  contentHtml: string;
}

const Post: React.FC<{ postData: PostDataType }> = ({ postData }) => (
  <Layout home={false}>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml,
        }}
      />
    </article>
  </Layout>
);

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
}
