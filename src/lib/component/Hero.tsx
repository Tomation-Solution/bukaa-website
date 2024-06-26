import { Box, Flex, Text, Image } from "@chakra-ui/react";
// import Image from "next/image";

const Hero = () => {
    return (
      <>
        <Flex
          justify={"space-between"}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          px={"8%"}
          py={"2rem"}
          my={{ base: 20, lg: 40 }}
          gap={10}
        >
          <Flex
            flexDirection={"column"}
            w={{ base: "100%", lg: "50%" }}
            gap={5}
          >
            <Text
              fontWeight={700}
              fontSize={44}
              display={{ base: "none", lg: "block" }}
            >
              BUKAA, Our <br /> Rallying Point for <br />
              Success...
            </Text>
            <Text
              fontWeight={700}
              fontSize={44}
              textAlign={"center"}
              display={{ lg: "none" }}
            >
              BUKAA, Our Rallying Point for Success...
            </Text>
            <Text
              w={{ base: "100%", lg: "60%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Our alma mater, Bayero University Kano, has been the cornerstone
              of our academic and personal development. Now, as alumni, it is
              our collective responsibility to contribute to the legacy of
              excellence that defines BUK. We stand on the shoulders of those
              who came before us, and it is our turn to carry the torch forward.
            </Text>
          </Flex>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image
              src="/pic1.jpeg"
              alt="hero"
              w={"100%"}
              borderRadius="10px"
              boxShadow={"0 20px 25px rgba(0, 0, 0, 0.5)"}
              objectPosition="center"
            />
          </Box>
        </Flex>
      </>
    );
}
 
export default Hero;