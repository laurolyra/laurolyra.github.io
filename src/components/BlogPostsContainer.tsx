import { Post } from '@/services/getPosts';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import remarkGfm from 'remark-gfm';

const BlogPostsContainer = async ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;
  return (
    <section key={slug}>
      <h2>Container</h2>
      <h1 className="bg-primary-dark">{title}</h1>
      <p>{headline}</p>
      <p>{slug}</p>
      <p>{date}</p>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
      {/* <p>{content}</p> */}
    </section>
  );
};

export default BlogPostsContainer;
