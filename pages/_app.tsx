export const dynamic = "force-dynamic";

import "../styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={notoSansKR.className}>
      <GoogleAnalytics gaId="G-FD1210DF18" />
      <Component {...pageProps} />
    </main>
  );
}
