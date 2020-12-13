import Head from 'next/head';
import { PostPreview } from 'theme/PostPreview';
import { posts } from 'theme/get-all-posts';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>thanish.me</title>
        <meta name="description" content="Some really bad code for you!"></meta>
      </Head>
      {posts.map((post, i) => (
        <PostPreview {...post} key={`${i}`} />
      ))}
    </>
  );
}
