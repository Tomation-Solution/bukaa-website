import { Text, Flex, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";

const GalleryPage = () => {
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
            GALLERY
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
              Gallery
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
          A glimpse into the vibrant life and culture at Bayero University, Kano, where knowledge meets tradition, and innovation thrives. Our gallery showcases the rich tapestry of academic excellence, student life, and the diverse experiences that shape our community.
          </Text>
        </Flex>

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
            width={{ base: "100%", lg: "25%" }}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Link href={"/news/343"}>
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
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus aliquid quod doloremque, nobis eveniet sed atque,
                  iusto non placeat cumque ex nesciunt fugit neque amet
                  repudiandae expedita delectus minus eos.
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            width={{ base: "100%", lg: "25%" }}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Link href={"/news/343"}>
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
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus aliquid quod doloremque, nobis eveniet sed atque,
                  iusto non placeat cumque ex nesciunt fugit neque amet
                  repudiandae expedita delectus minus eos.
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            width={{ base: "100%", lg: "25%" }}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Link href={"/news/343"}>
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
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus aliquid quod doloremque, nobis eveniet sed atque,
                  iusto non placeat cumque ex nesciunt fugit neque amet
                  repudiandae expedita delectus minus eos.
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            width={{ base: "100%", lg: "25%" }}
            height={"500px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Link href={"/news/343"}>
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
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus aliquid quod doloremque, nobis eveniet sed atque,
                  iusto non placeat cumque ex nesciunt fugit neque amet
                  repudiandae expedita delectus minus eos.
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default GalleryPage;
