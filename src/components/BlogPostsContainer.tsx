import { Post } from '@/services/getPosts';
import React from 'react';

const BlogPostsContainer = ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;
  return (
    <section key={slug}>
      <h2>Container</h2>
      <h1 className="bg-primary-dark">{title}</h1>
      <p>{headline}</p>
      <p>{slug}</p>
      <p>{date}</p>
      <p>{content}</p>
    </section>
  );
};

export default BlogPostsContainer;
