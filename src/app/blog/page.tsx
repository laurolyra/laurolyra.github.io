import React from 'react';
import { getPosts } from '../../services/getPosts';
import BlogPostsContainer from '@/components/BlogPostsContainer';

const BlogPage = async () => {
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
};

export default BlogPage;
