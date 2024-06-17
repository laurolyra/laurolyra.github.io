import ReactMarkdown from 'react-markdown';
import DynamicTag from './DynamicTag';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';

const ContentRenderer = ({ content }: { content: string }) => (
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
      a: (props) => (
        <DynamicTag
          as="a"
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
);

export default ContentRenderer