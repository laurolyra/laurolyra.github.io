import { Post } from '@/services/getPosts';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

const BlogPostsContainer = async ({ post }: { post: Post }) => {
  const { title, headline, slug, date, content } = post;
  const H1 = ({ children }): React.ReactNode => (
    <h1 className="text-2xl">{children}</h1>
  );
  const H2 = ({ children }) => <h2 className="text-xl">{children}</h2>;
  const H3 = ({ children }) => <h3 className="text-lg">{children}</h3>;
  const P = ({ children }) => (
    <p className="text-base bg-yellow-400">{children}</p>
  );
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
            h1: H1,
            h2: H2,
            h3: H3,
            p(props) {
              const { node, ...rest } = props;
              return <p style={{ color: 'red' }} {...rest} />;
            },
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
      {/* <p>{content}</p> */}
    </section>
  );
};

export default BlogPostsContainer;
