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

        <Flex
          justifyContent={"center"}
          textAlign={"center"}
          align={"center"}
          w={{ base: "80%", lg: "50%" }}
          flexDirection={"column"}
        >
          <Text color={"primary.main"} fontWeight={500} textAlign={"center"}>
            THE ALUMNI ASSOCIATION
          </Text>
          <Text color={"primary.main"}>
            Who is an Alumnus of Bayero University Kano?
            <br />
            <br />
            An Alumnus of Bayero University, Kano is: A graduate or former
            student of Bayero University or Abdullahi Bayero College or of
            Bayero University College Recipients of Bayero University&apos;s
            honorary degree. Serving and former employees of Bayero University
            Kano as associate members.
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        textAlign={"center"}
        align={"center"}
        // w={{ base: "80%", lg: "50%" }}
        pb={10}
      >
        <Text color={"primary.main"} fontWeight={500} textAlign={"center"}>
          OBJECTIVES OF BAYERO UNIVERSITY ALUMNI ASSOCIATION
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "start" }}
        gap={8}
        px={"8%"}
        flexWrap={"wrap"}
      >
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To provide a forum for its members for exchange of ideas regarding
            problems and progress of Bayero University.
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To provide a forum for its members for exchange of ideas regarding
            problems and progress of Bayero University.
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To serve individual Alumni and assist in the operations of the
            Alumni Association of the University.
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To achieve the above objectives by organizing educational, cultural
            and social programmes
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To maintain and improve the prestige, academic excellence and good
            image of the University.
          </Text>
        </Box>
        <Box
          rounded={16}
          py={6}
          px={3}
          border={"secondary.sub__"}
          _hover={{ bg: "secondary.main", color: "white" }}
          borderWidth={"2px"}
          w={"320px"}
          h={"150px"}
        >
          <Text textAlign={"center"} fontWeight={500}>
            To enhance and encourage mutual understanding between the
            authorities, staff and students of Bayero University.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mission;
