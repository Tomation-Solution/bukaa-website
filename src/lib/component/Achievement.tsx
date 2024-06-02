import { Text, Flex, Box } from "@chakra-ui/react";
import { GiAchievement } from "react-icons/gi";

const Achievement = () => {
  return (
    <>
      <Box my={32}>
        <Flex
          justify={"center"}
          align={"center"}
          flexDirection={"column"}
          gap={16}
          my={{ base: 8, lg: 16 }}
          overflowX={'hidden'}
        >
          <Box position={"relative"}>
            <Text
              color={"primary.main"}
              fontSize={"16px"}
              fontWeight={500}
              zIndex={40}
              position={"relative"}
            >
              OUR ACHIEVEMENTS
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
                Our Achievements
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, earum explicabo totam laboriosam harum ullam ipsum.
              Eveniet inventore asperiores, laboriosam quidem aliquam
              praesentium natus voluptas laudantium ipsa totam eligendi aperiam?
            </Text>
          </Flex>
        </Flex>

        <Flex
          justifyContent={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "start" }}
          gap={{ base: 0, lg: 32 }}
          flexWrap={"wrap"}
          color={'primary.sub'}
        >
          <Flex
            justify={"center"}
            flexDirection={{ base: "column", lg: "column" }}
          >
            <Flex
              justifyContent={"start"}
              align={"center"}
              gap={2}
              rounded={16}
              py={2}
              px={3}
              w={{ base: "100%", lg: "100%" }}
            >
              <Box boxSize="50px">
                <GiAchievement
                  color="#252525"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>{" "}
              <Text textAlign={"center"} fontWeight={500}>
                20,000 lorem ipsom dolins
              </Text>
            </Flex>
            <Flex
              justifyContent={"start"}
              align={"center"}
              gap={2}
              rounded={16}
              py={2}
              px={3}
              w={{ base: "100%", lg: "100%" }}
            >
              <Box boxSize="50px">
                <GiAchievement
                  color="#252525"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>{" "}
              <Text textAlign={"center"} fontWeight={500}>
                20,000 lorem ipsom dolins
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={{ base: "column", lg: "column" }}
            justifyContent={"center"}
          >
            <Flex
              justifyContent={"start"}
              align={"center"}
              gap={2}
              rounded={16}
              py={2}
              px={3}
              w={{ base: "100%", lg: "100%" }}
            >
              <Box boxSize="50px">
                <GiAchievement
                  color="#252525"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>{" "}
              <Text textAlign={"center"} fontWeight={500}>
                5 lorem ipsom dolins
              </Text>
            </Flex>
            <Flex
              justifyContent={"start"}
              align={"center"}
              gap={2}
              rounded={16}
              py={2}
              px={3}
              w={{ base: "100%", lg: "100%" }}
            >
              <Box boxSize="50px">
                <GiAchievement
                  color="#252525"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>{" "}
              <Text textAlign={"center"} fontWeight={500}>
                120 lorem ipsom dolins
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Achievement;
