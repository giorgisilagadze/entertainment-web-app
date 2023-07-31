import { GlobalStyled } from "@/styles/Global.Styled";
import type { AppProps } from "next/app";
import Header from "./components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
