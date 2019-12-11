import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

class Index extends React.Component {
  static async getInitialProps() {
    let stories = [];
    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      stories = await res.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return {
      stories,
    };
  }
  render() {
    const { stories } = this.props;

    return stories.length === 0 ? (
      <Error statusCode={503} />
    ) : (
      <Layout
        title={'Hacker Next'}
        description={'A Hacker News clone made with Next.js'}
      >
        <StoryList stories={stories} />
      </Layout>
    );
  }
}

export default Index;
