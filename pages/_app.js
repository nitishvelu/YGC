import { ChakraProvider } from "@chakra-ui/react";
import Auth from "../components/Auth";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, session }) {
  return (
    <ChakraProvider>
      <NextNProgress color="#68D391" height={5} />
      <Auth {...pageProps} session={session} Component={Component} />
    </ChakraProvider>
  );
}

export default MyApp;
