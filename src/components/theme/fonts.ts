// app/fonts.ts
import { Inter, Roboto_Mono, Roboto, Rubik, Lobster, Rammetto_One } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  // style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const rammetto = Rammetto_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const fonts = {
  roboto,
  inter,
  rammetto,
};
