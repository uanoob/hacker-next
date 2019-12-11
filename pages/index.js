import fetch from 'isomorphic-fetch';
import Error from 'next/error';
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
      <div>
        <h1>hacker next</h1>
        <StoryList stories={stories} />
        <style global jsx>
          {`
            html,
            body,
            ol,
            ul {
              margin: 0;
              padding: 0;
            }
            ol,
            ul {
              list-style: none;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
