import { Post } from '@/services/posts';
import Link from 'next/link';
import React from 'react';
import ContentRenderer from './ContentRenderer';

const BlogPostContainer = async ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;

  return (
    <section
      key={slug}
      className="w-8/12 my-2 first:mt-0 last:mb-0 p-4 bg-slate-500 rounded-2xl"
    >
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
