import { Text, Flex, Box } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Box my={32} id="mission">
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        gap={16}
        my={16}
      >
        <Box position={"relative"}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            position={"relative"}
          >
            OUR MISSIONS
          </Text>
          <Flex
            justify={"center"}
            align={"center"}
            flexDirection={"column"}
            position={"absolute"}
            whiteSpace={"nowrap"}
            textAlign={"center"}
            top={"-60%"}
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
              Our Missions
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
            To provide excellent undergraduate and professional educational
            programmes and to produce high quality human resources required for
            the promotion of the development of the host community, the nation
            and humanity. <br />
            <br />
            Our MISSION Is to provide support requirement for the promotion of
            functional education in line with the value and aspirations of
            Bayero University.
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "start" }}
        gap={8}
      >
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.sub__", color: "white" }}
          borderWidth={"2px"}
          w={"250px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            laborum deserunt rem atque fuga officiis{" "}
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.sub__", color: "white" }}
          borderWidth={"2px"}
          w={"250px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            laborum deserunt rem atque fuga officiis{" "}
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.sub__", color: "white" }}
          borderWidth={"2px"}
          w={"250px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            laborum deserunt rem atque fuga officiis{" "}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mission;
