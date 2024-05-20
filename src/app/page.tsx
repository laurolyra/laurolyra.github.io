import BlogPostsContainer from '@/components/BlogPostsContainer';
import { getPosts } from '@/services/getPosts';

const Home = async () => {
  const posts = await getPosts();
  console.log('posts', posts);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {posts ? (
        <>
          {posts.map((post) => (
            <BlogPostsContainer key={post.slug} post={post} />
          ))}
        </>
      ) : null}
    </main>
  );
};

export default Home;
