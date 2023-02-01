"use client";

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MainCard } from "./mainCard";

export const CardHolder = () => {
  return (
    <Box>
      <Box
        backgroundColor={"#6B46C1"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
        h="calc(50vh)"
        paddingX="2rem"
        pt={["35rem","15rem"]}
      >
        <Heading textColor={"#fff"} mb="0.8rem" 
        >
          Simple pricing for your business
        </Heading>
        <Text textColor={"#fff"} mb="6.8rem">
          Plans that are carefully crafted to suit your business.
        </Text>
        <MainCard />
      </Box>
      <Box
        backgroundColor={"#fff"}
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent={["normal","space-between"]}
        alignItems={["baseline","center"]}
        h="calc(50vh)"
        paddingX={["2rem","20rem"]}
        mt={["30rem",'4rem']}
        fontSize={'1.1rem'}
        letterSpacing='-0.03rem'
      >
        <Box display={'flex'} justifyContent={["space-between",'center']} alignItems={'center'} mb={["1.5rem", "0"]}>
          <Image src="moneyBack.png" mr='1rem' h='2.5rem'/>
          <Text fontWeight={'bold'}>30 days money back Guarantee</Text>
        </Box>
        <Box display={'flex'} justifyContent={["space-between",'center']} alignItems={'center'} mb={["1.5rem", "0"]}>
          <Image src="setup.png" mr='1rem' h='2.5rem'/>
          <Text fontWeight={'bold'}>No setup fees 100% hassle-free</Text>
        </Box>
        <Box display={'flex'} justifyContent={["space-between",'center']} alignItems={'center'}>
          <Image src="subscription.png" mr='1rem' h='2.5rem'/>
          <Text fontWeight={'bold'}>
            No monthly subscription Pay once and for all
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
