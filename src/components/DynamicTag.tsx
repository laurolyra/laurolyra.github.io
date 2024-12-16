import { ReactNode } from 'react';

export type DynamicTagProps = {
  as: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

const DynamicTag: React.FC<DynamicTagProps> = ({
  as: Tag,
  children,
  className,
}) => <Tag className={className}>{children}</Tag>;

export default DynamicTag;
