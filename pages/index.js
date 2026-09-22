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
        <p>10 Things That Require Zero Talent</p>
        <p> - Being on time </p>
        <p> - Making An Effort </p>
        <p> - Being High Energy </p>
        <p> - Having a Positive Attitude </p>
        <p> - Being Passionate </p>
        <p> - Using Good Body Language </p>
        <p> - Being Coachable </p>
        <p> - Doing A Little Extra </p>
        <p> - Being Prepared </p>
        <p> - Having A Strong Work Ethic </p>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
