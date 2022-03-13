import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS>
      <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}