import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Rhetos',
    imageUrl: 'img/rhetos.png',
    description: <>Various packages for easier integration with Rhetos server.</>,
  },
  {
    title: 'Components',
    imageUrl: 'img/ng-zorro.svg',
    description: <>Components built using Angular implementation of Ant desing, Ng-Zorro.</>,
  },
  {
    title: 'Dynamic forms',
    imageUrl: 'img/formly.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while
        reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className="flex">
            <img className="logo" src="img/logo.svg" />
          </div>
        </div>
        <Link className="link-get-started" to={useBaseUrl('docs/rhetos/overview')}>
          GET STARTED
        </Link>
      </header>

      <main className="main"></main>
    </Layout>
  );
}

export default Home;

// <main><img className="logo" src="img/logo.svg" /></main>

// <h1 className="hero__title">
//   <strong className="c">ngx-floyd</strong> packages documentation
// </h1>

// {features && features.length > 0 && (
//   <section className={styles.features}>
//     <div className="container">
//       <div className="row">
//         {features.map((props, idx) => (
//           <Feature key={idx} {...props} />
//         ))}
//       </div>
//     </div>
//   </section>
// )}
