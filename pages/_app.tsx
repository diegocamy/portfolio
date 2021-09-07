import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeSwitch from "../components/ThemeSwitch";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <ThemeSwitch />
    </ChakraProvider>
  );
}

export default MyApp;
