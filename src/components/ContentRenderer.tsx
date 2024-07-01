import ReactMarkdown from 'react-markdown';
import DynamicTag from './DynamicTag';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';

import { Roboto_Mono as robotoMono } from 'next/font/google';

const roboto = robotoMono({ weight: "400", subsets: ['latin'] });

const ContentRenderer = ({ content }: { content: string }) => (
  <ReactMarkdown
    className="leading-relaxed"
    components={{
      h1: (props) => (
        <DynamicTag
          as="h1"
          className="text-3xl"
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
          className="italic"
          {...props}
        />
      ),
      blockquote: (props) => (
        <DynamicTag
          as="blockquote"
          className="my-2 *:italic bg-slate-400"
          {...props}
        />
      ),
      ul: (props) => (
        <DynamicTag
          as="ul"
          className="list-disc list-outside ml-4"
          {...props}
        />
      ),
      ol: (props) => (
        <DynamicTag
          as="ol"
          className="list-decimal list-outside ml-4"
          {...props}
        />
      ),
      code: (props) => (
        <DynamicTag
          as="code"
          className={`${roboto.className} text-green-400 bg-slate-950`}
          {...props}
        />
      ),
      pre: (props) => (
        <div className="bg-slate-950 flex flex-row mx-auto max-w-screen-lg" >
          <DynamicTag
            as="pre"
            className={`${roboto.className} p-2 *:bg-transparent *:max-w-full`}
            {...props}
          />
        </div>
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