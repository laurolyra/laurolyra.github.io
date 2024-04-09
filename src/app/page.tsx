import BlogPostsContainer from '@/components/BlogPostsContainer';
import { getPosts } from '@/services/getPosts';

export default async function Home() {
  const posts = await getPosts();
  return (
    <section>
      <h1 className="bg-primary-dark">Blog</h1>
      {posts ? (
        <>
          {posts.map((post) => (
            <BlogPostsContainer key={post.slug} post={post} />
          ))}
        </>
      ) : null}
    </section>
  );
}
