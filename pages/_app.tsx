import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from "@next/font/google";
const roboto = Roboto_Mono({subsets: ["latin"] , preload: true});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
