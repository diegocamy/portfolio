import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeSwitch from "../components/ThemeSwitch";
import "@fontsource/karla";
import "@fontsource/rubik";

const theme = extendTheme({
  fonts: {
    heading: "Rubik",
    body: "Karla",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <ThemeSwitch />
    </ChakraProvider>
  );
}

export default MyApp;
