'use client';
import { Post } from '@/services/posts';
import { createContext } from 'react';

export const PostContext = createContext([] as Post[]);

export const PostProvider = ({ children, posts }: { children: React.ReactNode; posts: Post[] }) => {
  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};
