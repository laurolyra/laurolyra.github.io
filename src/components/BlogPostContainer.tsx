import { Post } from '@/services/posts';
import Link from 'next/link';
import React from 'react';
import ContentRenderer from './ContentRenderer';

const BlogPostContainer = async ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;

  return (
    <section key={slug} className="w-8/12 p-2 my-2 first:mt-0 last:mb-0 border border-black rounded-lg shadow-[0px_1px_11px_0px_#2d3748]">
      <Link href={`blog/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <div className="flex flex-row justify-between mb-4">
        <p>{headline}</p>
        <p>{date}</p>
      </div>
      <ContentRenderer content={content} />
    </section>
  );
};

export default BlogPostContainer;
