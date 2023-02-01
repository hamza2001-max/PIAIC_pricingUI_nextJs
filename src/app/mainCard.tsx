"use client";

import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const MainCard = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={["column", "row"]}
      boxShadow="md"
      rounded="md"
    >
      <Box
        backgroundColor={"rgb(240, 234, 251)"}
        textAlign="center"
        paddingX={"3rem"}
        paddingY={"3rem"}
        borderTopLeftRadius="0.6rem"
        borderTopRightRadius={["0.6rem", "0"]}
        borderBottomLeftRadius={["0", "0.6rem"]}
      >
        <Heading size={"md"} marginBottom="1rem">
          Premium PRO
        </Heading>
        <Heading as="h1" size="3xl" marginBottom="0.5rem">
          $329
        </Heading>
        <Text marginBottom="1rem">billed just once</Text>
        <Button
          backgroundColor={"#805AD5"}
          color={"#fff"}
          marginBottom="1rem"
          paddingX={"5rem"}
        >
          Get Started
        </Button>
      </Box>
      <Box
        paddingX={"2rem"}
        paddingY={"3rem"}
        backgroundColor={"#fff"}
        borderBottomLeftRadius={["0.6rem", "0"]}
        borderTopRightRadius={["0", "0.6rem"]}
        borderBottomRightRadius={"0.6rem"}
      >
        <Text marginBottom={"1.2rem"}>
          Access these features when you get this pricing package for your
          business.
        </Text>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"#6B46C1"} />
            International calling and messaging API
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"#6B46C1"} />
            Additional phone numbers
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"#6B46C1"} />
            Automated messages via Zapier
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"#6B46C1"} />
            24/7 support and consulting
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
