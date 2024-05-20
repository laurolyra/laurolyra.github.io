import React from 'react';
import { getPost, getPosts } from '../../../services/getPosts';
import BlogPostsContainer from '@/components/BlogPostsContainer';

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPage = async (props: any) => {
  console.log('props', props);
  const post = await getPost(props.slug);
  console.log('post', post);
  return (
    <section>
      <h1>Blogs</h1>
      {/* <p>{post.date}</p> */}
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
