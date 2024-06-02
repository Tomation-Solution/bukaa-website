import { Box, Text, Flex } from "@chakra-ui/react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

const Members = () => {
    return (
      <>
        <Box bg="secondary.sub__" py={20} px={{ base: "5%", lg: "20%" }}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            textAlign={"center"}
            position={"relative"}
            mb={10}
          >
            OUR MEMBERS
          </Text>

          <Flex justify={"center"} align={"center"} gap={16} flexWrap={"wrap"}>
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>{" "}
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>{" "}
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>{" "}
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>{" "}
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>{" "}
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Box w={"150px"} h={"150px"} rounded={"100%"} bg={"white"}></Box>
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                John Doe
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                Managing Director
              </Text>
            </Flex>
          </Flex>

          <Flex justify={"center"} flexDirection={{base:'column', lg:'row'}} align={"center"} gap={{base:4,lg:16}} mt={32}>
            <Text
              fontWeight={400}
              color={"primary.main"}
              align={"center"}
              textDecoration={"underline"}
              cursor={"pointer"}
            >
              Login to membership web portal
            </Text>
            <Flex
              align={"center"}
              justify={"start"}
              gap={2}
              whiteSpace={"nowrap"}
              textDecoration={"underline"}
              cursor={"pointer"}
            >
              <IoLogoGooglePlaystore color="#252525" />
              <Text fontSize={"1rem"} color={"primary.main"}>
                Get membership app for android
              </Text>
            </Flex>
            <Flex
              align={"center"}
              justify={"start"}
              gap={2}
              whiteSpace={"nowrap"}
              textDecoration={"underline"}
              cursor={"pointer"}
            >
              <SiAppstore color="#252525" />
              <Text fontSize={"1rem"} color={"primary.main"}>
                Get membership app for ios
              </Text>
            </Flex>
          </Flex>
        </Box>
      </>
    );
}
 
export default Members;