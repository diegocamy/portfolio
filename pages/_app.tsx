import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
