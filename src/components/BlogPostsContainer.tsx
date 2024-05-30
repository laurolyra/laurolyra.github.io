import { Post } from '@/services/getPosts';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import DynamicTag from './DynamicTag';

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
        <ReactMarkdown
          components={{
            h1: (props) => (
              <DynamicTag
                as="h1"
                className="text-3xl bg-slate-500"
                {...props}
              />
            ),
            h2: (props) => (
              <DynamicTag as="h1" className="text-2xl" {...props} />
            ),
            h3: (props) => (
              <DynamicTag as="h1" className="text-xl" {...props} />
            ),
            p: (props) => (
              <DynamicTag
                as="p"
                className="text-base text-red-300"
                {...props}
              />
            ),
            em: (props) => (
              <DynamicTag
                as="em"
                className="text-base text-yellow-500"
                {...props}
              />
            ),
            code: (props) => (
              <DynamicTag
                as="code"
                className="text-green-400 bg-black"
                {...props}
              />
            ),
            pre: (props) => (
              <DynamicTag
                as="pre"
                className="bg-blue-500 *:bg-inherit"
                {...props}
              />
            ),
            img: (img) => {
              return (
                <Image
                  src={img.src!}
                  alt={img.alt!}
                  width={100}
                  height={100}
                  quality={50}
                />
              );
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPostsContainer;
