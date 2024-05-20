import React from 'react';
import { getPost, getPosts } from '../../../services/posts';

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
    <section>
      <h1>Blogs</h1>
      <p>{post.headline}</p>
      {/* {posts ? (
        <>
          {posts.map((post) => (
            <BlogPostsContainer key={post.slug} post={post} />
          ))}
        </>
      ) : null} */}
    </section>
  );
};

export default BlogPage;
