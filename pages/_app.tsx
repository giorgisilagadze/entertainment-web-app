import { GlobalStyled } from "@/styles/Global.Styled";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [isBookmarked, setIsBookmarked] = useState([]);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <GlobalStyled />
      <Header />
      <Component {...pageProps} isBookmarked={isBookmarked} />
    </>
  );
}
