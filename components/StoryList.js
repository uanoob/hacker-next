import Link from 'next/link';

const StoryList = ({ stories }) => (
  <ul className={'story-list'}>
    {stories.map(story => (
      <li className={'story'} key={story.id}>
        <h2 className={'story-title'}>
          <a href={story.url}>{story.title}</a>
        </h2>
        <div className={'story-details'}>
          <span>{story.points || 0} points</span>
          <Link href={`/story?id=${story.id}`}>
            <a>{story.comments_count || 0} comments</a>
          </Link>
        </div>
      </li>
    ))}
    <style jsx>{`
      .story-list {
        padding: 0 1em;
      }
      .story {
        list-style: none;
        padding: 1em 0;
      }
      .story-title {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
      }
      .story-title a {
        color: #333;
        text-decoration: none;
      }
      .story-title a:hover,
      .story-details a:hover {
        text-decoration: underline;
      }
      .story-details {
        font-size: 0.8rem;
        font-weight: bold;
      }
      .story-details span {
        margin-right: 1em;
      }
      .story-details a {
        color: #6600ff;
        text-decoration: none;
      }
    `}</style>
  </ul>
);

export default StoryList;
