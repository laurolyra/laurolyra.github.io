import React from 'react';
import { getPost, getPosts } from '../../../services/posts';
import ContentRenderer from '@/components/ContentRenderer';

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
    date: post.date,
  }));
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <section className="w-8/12 container mx-auto">
      <div className=" px-6 py-4 bg-slate-500 rounded-2xl">
        <div className="mb-4">
          <h1 className="text-3xl">{post.title}</h1>
          <p>{post.headline}</p>
        </div>
        <ContentRenderer content={post.content} />
      </div>
    </section>
  );
};

export default BlogPage;
