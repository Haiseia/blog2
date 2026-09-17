import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Why I Chose My IT Specialization: </p>
        <p>My chosen IT specialization is Web and Mobile Development. Ever since I was young, I've always been fascinated by the world of new, modern, and ever-growing technology.
          I specifically chose this because I have noticed that both web and mobile are becoming the trend.
          Not only that, but I've been exposed to and familiar with these domains, so it naturally intrigued me and the desire to learn.
          Additionally, gaining knowledge and practical experience in these fields will greatly assist in eventually making my own website and/or mobile application.
          These personal projects then I can utilize as projects to show my growing expertise and serve as proof of my technological knowledge.
          I, however, won't stop there. As the technological world continues to evolve, so does myself.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}