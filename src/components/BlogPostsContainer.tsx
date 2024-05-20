import { Post } from '@/services/getPosts';
import Link from 'next/link';
import React from 'react';

const BlogPostsContainer = ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;
  return (
    <section key={slug} className="w-full py-2 first:pt-0 last:pb-0 ">
      <h2>Container</h2>
      <Link href={`blog/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p>{headline}</p>
      <p>{slug}</p>
      <p>{date}</p>
      <p>{content}</p>
    </section>
  );
};

export default BlogPostsContainer;
