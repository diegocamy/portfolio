import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Badge,
  Flex,
  Text,
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Button,
  DrawerFooter,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useScrollBoost } from "react-scrollbooster";
import { MdCheckCircle } from "react-icons/md";
import { ProjectObject } from "../pages";
import useHovering from "../hooks/useHovering";
import FullScreenImage from "./FullScreenImage";

interface Props {
  project: ProjectObject;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectDrawer({ project, isOpen, onClose }: Props) {
  const { onOpen, onClose: onclose, isOpen: isopen } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [viewport] = useScrollBoost({
    direction: "horizontal",
    scrollMode: "transform",
  });

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent maxH={isMobile ? "90vh" : "75vh"}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {project.title}
          <Box>
            <Text fontSize="md" fontWeight="normal" mb="2">
              Technologies
            </Text>
            <Flex flexWrap="wrap">
              {project.stack.map((s, idx) => (
                <Badge key={idx} variant="outline" mr="2" mb="2">
                  {s}
                </Badge>
              ))}
            </Flex>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <FullScreenImage isOpen={isopen} onClose={onclose} />
          <Flex width="100%" overflow="hidden" ref={viewport}>
            <Flex className="content" align="center">
              {project.images.map((img, idx) => (
                <Box mr="2" cursor="pointer" key={idx}>
                  <Image
                    alt={`screenshot ${idx + 1}`}
                    height={isMobile ? "180px" : "350px"}
                    width={isMobile ? "310px" : "700px"}
                    src={img.src}
                    onClick={onOpen}
                    blurDataURL={img.blurDataURL}
                    placeholder="blur"
                    quality="100"
                    objectFit="cover"
                    layout="fixed"
                    loading="lazy"
                    className="image"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
          <Box my="5" mb="5" maxW="750px">
            <Heading fontSize="md" mb="5">
              Details
            </Heading>
            {project.details.split("nline").map((line) => (
              <Text mb="5" key={line}>
                {line}
              </Text>
            ))}
          </Box>
          {project.features && (
            <Box my="5">
              <Heading fontSize="md" mb="5">
                Features
              </Heading>
              <List spacing={1}>
                {project.features.map((f) => (
                  <ListItem key={f}>
                    <ListIcon as={MdCheckCircle} />
                    {f}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          <DrawerFooter borderTopWidth="1px" justifyContent="flex-start">
            <Button
              variant="outline"
              colorScheme="black"
              mr={3}
              cursor="pointer"
              onClick={() => window.open(project.demoURL, "_blank")}
            >
              Demo
            </Button>
            <Button
              variant="outline"
              colorScheme="black"
              cursor="pointer"
              onClick={() => window.open(project.codeURL, "_blank")}
            >
              View Code
            </Button>
          </DrawerFooter>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default ProjectDrawer;
