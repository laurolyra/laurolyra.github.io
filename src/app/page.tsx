import BlogPostsContainer from '@/components/BlogPostContainer';
import { PostContext } from '@/context/PostsContext';
import { useContext } from 'react';

const Home = async () => {
  const posts = useContext(PostContext);
  return (
    <main className="flex flex-col items-center justify-between container mx-auto py-6 px-2 md:px-4 h-full">
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
