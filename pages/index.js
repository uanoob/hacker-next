import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories = [];
    let page = Number(query.page) || 1;
    try {
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`,
      );
      stories = await res.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return {
      page,
      stories,
    };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration =>
          console.log('service worker registration successful', registration),
        )
        .catch(err => {
          console.warn('service worker registration failed', err);
        });
    }
  }

  render() {
    const { page, stories } = this.props;

    return stories.length === 0 ? (
      <Error statusCode={503} />
    ) : (
      <Layout
        title={'Hacker Next'}
        description={'A Hacker News clone made with Next.js'}
      >
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>
        <style jsx>
          {`
            footer {
              padding: 1em;
            }
            footer a {
              font-weight: bold;
              color: black;
              text-decoration: none;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
