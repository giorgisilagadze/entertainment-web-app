import { GlobalStyled } from "@/styles/Global.Styled";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}
