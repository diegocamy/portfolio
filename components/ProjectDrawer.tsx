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
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useScrollBoost } from "react-scrollbooster";
import { MdCheckCircle } from "react-icons/md";
import { ProjectObject } from "../pages";

interface Props {
  project: ProjectObject;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectDrawer({ project, isOpen, onClose }: Props) {
  const [viewport] = useScrollBoost({
    direction: "horizontal",
    scrollMode: "transform",
  });

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent maxH="80vh">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {project.title}
          <Box>
            <Text fontSize="sm" fontWeight="normal" mb="2">
              Technologies
            </Text>
            <Flex>
              <Badge variant="outline" mr="2">
                React
              </Badge>
              <Badge variant="outline" mr="2">
                Typescript
              </Badge>
              <Badge variant="outline" mr="2">
                NodeJs
              </Badge>
              <Badge variant="outline" mr="2">
                Express
              </Badge>
            </Flex>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <Flex width="100%" overflow="hidden" ref={viewport}>
            <Flex className="content">
              {project.images.map((img, idx) => (
                <Image
                  key={idx}
                  alt={`screenshot ${idx + 1}`}
                  height="350px"
                  width="700px"
                  src={img.src}
                  blurDataURL={img.blurDataURL}
                  placeholder="blur"
                  quality="100"
                  objectFit="cover"
                  layout="fixed"
                  loading="lazy"
                />
              ))}
            </Flex>
          </Flex>
          <Box my="5" mb="5" maxW="750px">
            <Heading fontSize="md" mb="5">
              Details
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              asperiores laborum repellendus expedita cupiditate similique
              nostrum eveniet, sunt quasi minima recusandae, inventore provident
              sint hic doloremque quisquam! Inventore, officiis odit? Officiis
              sint possimus autem officia beatae expedita tempore suscipit.
              <br />
              <br />
              Nostrum explicabo odio dolorem hic, nulla natus distinctio sint
              sed possimus doloribus? Sit facere ut id maxime rem aut eos
              aliquam. Laborum voluptatum itaque alias accusantium animi iure,
              natus voluptatibus amet ut ullam fuga illo, nostrum veniam sed
              suscipit excepturi? <br />
              <br />
              Voluptate, excepturi veniam repellat ipsum unde debitis quaerat
              dolor qui nemo?
            </Text>
          </Box>
          <Box my="5">
            <Heading fontSize="md" mb="5">
              Features
            </Heading>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdCheckCircle} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </Box>
          <DrawerFooter borderTopWidth="1px" justifyContent="flex-start">
            <Button variant="outline" colorScheme="black" mr={3}>
              Demo
            </Button>
            <Button variant="outline" colorScheme="black">
              View Code
            </Button>
          </DrawerFooter>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default ProjectDrawer;
