import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeSwitch from "../components/ThemeSwitch";
import "@fontsource/karla";
import "@fontsource/rubik";
import Footer from "../components/Footer";
import { useState } from "react";

const theme = extendTheme({
  fonts: {
    heading: "Rubik",
    body: "Karla",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [visibleSection, setVisibleSection] = useState<
    "about" | "projects" | "contact"
  >("about");

  return (
    <ChakraProvider theme={theme}>
      <Navbar visibleSection={visibleSection} />
      <Component {...pageProps} setVisibleSection={setVisibleSection} />
      <ThemeSwitch />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
