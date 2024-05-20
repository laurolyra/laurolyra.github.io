import BlogPostsContainer from '@/components/BlogPostsContainer';
import { getPosts } from '@/services/posts';

const Home = async () => {
  const posts = await getPosts();
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
