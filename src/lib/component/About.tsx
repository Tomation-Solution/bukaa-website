import { Text, Flex, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about">
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
            ABOUT US
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
              About Us
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
            The Bayero University Alumni Office was incorporated in February
            2001 and commenced operation in 2002. The Alumni Office, which later
            metamorphosed into Development Office in March 2005, was initially
            responsible for identifying the projects of Bayero University
            whether in Nigeria or abroad and establishing Bayero University
            Alumni Association Branches across the Country. The Office is also
            in charge of the convocation register. <br /> <br />
            The Development/Advancement Office has three main functions;
            Development (fundraising), Alumni Relations and Communications.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
