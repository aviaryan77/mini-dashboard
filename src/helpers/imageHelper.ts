import { ImageLoaderProps } from 'next/image';

export const myLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
