import { Container } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import data from "../data/data";

export interface ProjectObject {
  images: {
    blurDataURL: string;
    src: string;
    height: number;
    width: number;
    type?: string;
  }[];
  stack: string[];
  title: string;
  intro: string;
  text: string;
  features?: string[];
  details: string;
  demoURL: string;
  codeURL: string;
}

interface Props {
  projects: ProjectObject[];
}

export default function Home({ projects }: Props) {
  return (
    <Container maxW="1200px">
      <Head>
        <title>Diego Camy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Technologies />
      <Projects projects={projects} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await Promise.all(
    data.map(async (project) => {
      return Promise.all(
        project.images.map(async (i) => {
          const { base64, img } = await getPlaiceholder(i);

          return {
            ...img,
            blurDataURL: base64,
          };
        })
      ).then((values) => ({ ...project, images: values }));
    })
  ).then((values) => values);

  return {
    props: {
      projects: projectsData,
    },
  };
};
