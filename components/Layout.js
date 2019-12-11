import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={description} />
    </Head>
    <div className='container'>
      <nav>
        <Link href='/'>
          <a>
            <span className='main-title'>Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>
      {`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #f6f6ef;
        }
        nav {
          background-color: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-block;
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}
    </style>
    <style global jsx>
      {`
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }
      `}
    </style>
  </Fragment>
);

export default Layout;
