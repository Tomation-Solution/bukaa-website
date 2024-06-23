import { Text, Flex, Box, Image } from "@chakra-ui/react";

const Event = () => {
  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        gap={16}
        my={48}
      >
        <Box position={"relative"}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            position={"relative"}
          >
            EVENTS
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
              Events{" "}
            </Text>
          </Flex>
        </Box>

        <Flex
          justifyContent={"center"}
          textAlign={"center"}
          align={"center"}
          w={{ base: "80%", lg: "100%" }}
          flexWrap={"wrap"}
          gap={"50px"}
        >
          <Flex
            flexDirection="column"
            width={{base:'100%', lg:"25%"}}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Box height={"60%"}>
              <Image
                src={"/pic1.jpeg"}
                roundedTop={"lg"}
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </Box>
            <Flex
              flexDirection={"column"}
              gap={2}
              align={"center"}
              p={4}
              height={"40%"}
            >
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                Introduction to Web
              </Text>
              <Flex flexDirection={"column"} gap={2} align={"start"} w={'100%'}>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Date: 20th Nov, 2024
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Time: 12 noon
                </Text>{" "}
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Venue: Town Hall
                </Text>
              </Flex>
            </Flex>
          </Flex>
         <Flex
            flexDirection="column"
            width={{base:'100%', lg:"25%"}}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Box height={"60%"}>
              <Image
                src={"/pic1.jpeg"}
                roundedTop={"lg"}
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </Box>
            <Flex
              flexDirection={"column"}
              gap={2}
              align={"center"}
              p={4}
              height={"40%"}
            >
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                Introduction to Web
              </Text>
              <Flex flexDirection={"column"} gap={2} align={"start"} w={'100%'}>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Date: 20th Nov, 2024
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Time: 12 noon
                </Text>{" "}
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Venue: Town Hall
                </Text>
              </Flex>
            </Flex>
          </Flex>
         <Flex
            flexDirection="column"
            width={{base:'100%', lg:"25%"}}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Box height={"60%"}>
              <Image
                src={"/pic1.jpeg"}
                roundedTop={"lg"}
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </Box>
            <Flex
              flexDirection={"column"}
              gap={2}
              align={"center"}
              p={4}
              height={"40%"}
            >
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                Introduction to Web
              </Text>
              <Flex flexDirection={"column"} gap={2} align={"start"} w={'100%'}>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Date: 20th Nov, 2024
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Time: 12 noon
                </Text>{" "}
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Venue: Town Hall
                </Text>
              </Flex>
            </Flex>
          </Flex>
         <Flex
            flexDirection="column"
            width={{base:'100%', lg:"25%"}}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Box height={"60%"}>
              <Image
                src={"/pic1.jpeg"}
                roundedTop={"lg"}
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </Box>
            <Flex
              flexDirection={"column"}
              gap={2}
              align={"center"}
              p={4}
              height={"40%"}
            >
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                Introduction to Web
              </Text>
              <Flex flexDirection={"column"} gap={2} align={"start"} w={'100%'}>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Date: 20th Nov, 2024
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Time: 12 noon
                </Text>{" "}
                <Text fontWeight={400} color={"primary.main"} align={"start"}>
                  Venue: Town Hall
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Event;
