import { Text, Flex, Box } from "@chakra-ui/react";

const Vision = () => {
  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        gap={16}
        my={32}
      >
        <Box position={"relative"}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            position={"relative"}
          >
            OUR VISION
          </Text>
          <Flex
            justify={"center"}
            align={"center"}
            flexDirection={"column"}
            position={"absolute"}
            whiteSpace={"nowrap"}
            textAlign={"center"}
            top={"-50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            zIndex={0}
          >
            <Box h={"50px"} w={"2px"} bg={"secondary.sub_"}></Box>
            <Text
              color={"secondary.sub_"}
              textAlign={"center"}
              fontSize={"60px"}
              fontWeight={300}
            >
              Our Vision
            </Text>
          </Flex>
        </Box>

        <Flex
          justifyContent={"center"}
          textAlign={"center"}
          align={"center"}
          w={{ base: "80%", lg: "50%" }}
        >
          <Text color={"primary.main"}>
            The University shall be the leading institution in the development
            and promotion of a comprehensive and integrated system of functional
            education that is in line with the values and aspirations of its
            host community and the nation. <br />
            <br />
            Our VISION to serve as an agent of development and a catalyst in
            promoting stakeholders&apos; and public participation in
            funding education.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Vision;
