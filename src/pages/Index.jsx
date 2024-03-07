import React from "react";
import { Box, Flex, Text, Heading, Image, VStack, HStack, Link, IconButton, Container } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1617704548623-340376564e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbG9uJTIwbXVza3xlbnwwfHx8fDE3MDk4MTc3Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Elon Musk" mb={4} />
          <Heading as="h1" size="2xl">
            Elon Musk
          </Heading>
          <Text fontSize="xl" textAlign="center">
            CEO of SpaceX and Tesla, Inc. Founder of Neuralink and The Boring Company. Working on sustainable energy for Earth with Tesla and making life multiplanetary with SpaceX.
          </Text>
          <HStack spacing={4} mt={4}>
            <Link href="https://twitter.com/elonmusk" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
            </Link>
            <Link href="https://www.linkedin.com/in/elonmusk" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="linkedin" />
            </Link>
            <Link href="https://github.com/elonmusk" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="outline" />
            </Link>
            <Link href="mailto:elonmusk@tesla.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" variant="outline" colorScheme="red" />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
