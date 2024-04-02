// import { Post } from '@/services/getPosts';
import React from 'react';

const BlogPostsContainer = ({ post }: { post: any }) => {
  const { slug, name, id } = post;
  return (
    <section key={slug}>
      <h2>Container</h2>
      <h1 className="bg-primary-dark">{name}</h1>

      <p>{slug}</p>

      <p>{id}</p>
    </section>
  );
};

export default BlogPostsContainer;
