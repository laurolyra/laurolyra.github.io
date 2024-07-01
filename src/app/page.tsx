import BlogPostsContainer from '@/components/BlogPostContainer';
import { getPosts } from '@/services/posts';

const Home = async () => {
  const posts = await getPosts();
  return (
    <main className="flex flex-col items-center justify-between container mx-auto py-6 px-2 md:px-4">
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
