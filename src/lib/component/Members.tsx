import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import { useToast } from '@chakra-ui/react';
import { NEXT_PUBLIC_MEMBER_LOGIN_URL } from "@/config";

const Members = () => {
  const toast = useToast();
  const loginUrl = NEXT_PUBLIC_MEMBER_LOGIN_URL;

  const handleClick = () => {
    toast({
      title: "Coming Soon",
      description: "Get membership app for mobile is coming soon!",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

    return (
      <>
        <Box bg="secondary.sub__" py={20} px={{ base: "5%", lg: "10%" }}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            textAlign={"center"}
            position={"relative"}
            mb={10}
          >
            OUR EXECUTIVE TEAM
          </Text>

          <Flex
            justify={"center"}
            align={"center"}
            gap={16}
            flexWrap={"wrap"}
            flexDirection={"column"}
          >
            <Flex flexDirection={"column"} gap={2} align={"center"}>
              <Image
                src={"/Shuaibu Idris mni President.jpg"}
                width={"150px"}
                height={"150px"}
                borderRadius={"full"}
                alt="executive"
              />
              <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                Shuaibu Idris
              </Text>
              <Text fontWeight={400} color={"primary.main"} align={"center"}>
                President
              </Text>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              gap={16}
              flexWrap={"wrap"}
              // flexDirection={"column"}
            >
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Aare Akinkunmi Akinyemi Vice President 1.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Aare Akinkunmi Akinyemi
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Vice President
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Ahmed Abdulquadir Firdaus Vice President II.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Ahmed Abdulquadir Firdaus
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Vice President II
                </Text>
              </Flex>{" "}
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              gap={16}
              flexWrap={"wrap"}
              // flexDirection={"column"}
            >
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Salisu Lawan Indabawa Secretary General.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Salisu Lawan Indabawa
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Secretary General
                </Text>
              </Flex>
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Maaruf Zakariya Assistant Secretary 1.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Maaruf Zakariya
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Assistant Secretary 1
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Mairo Suleiman Assistant Secretary General 2.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Mairo Suleiman
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Assistant Secretary General 2
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/LAWAN ALI GUJUNGU TREASURER.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Lawan Ali Gujungu
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Treasurer
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Dr Safiya Stephanie Musa mpi Financial Secretary.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Dr Safiya Stephanie Musa
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Financial Secretary
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Mustapha A Dawaki Welfare Secretary.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Mustapha A Dawaki
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Welfare Secretary
                </Text>
              </Flex>
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Barr Saidu Muhammed Tudun Wada Legal Adviser.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Barr Saidu Muhammed Tudun Wada
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Legal Adviser
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={
                    "/Amb Adamu Babangida Ibrahim fcna, fcit Internal Auditor.jpg"
                  }
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Amb Adamu Babangida Ibrahim
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Internal Auditor
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Comrade Aliyu Emu Yusuf Ex Officio North Central.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Comrade Aliyu Emu Yusuf
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Officio North Central
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Dr Bala Muhammad Ex Officio North West Zone.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Dr Bala Muhammad
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Officio North West Zone
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Ibrahim Idris Dan Isan Fika Ex Offio North East.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Ibrahim Idris Dan Isan
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Offio North East
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Barr Lawrence Juwah Ex Officio South South.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Barr Lawrence Juwah
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Officio South South
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Joseph Adewale Rennaiye Ex Officio Souht West.jpg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Joseph Adewale Rennaiye
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Officio South West
                </Text>
              </Flex>{" "}
              <Flex flexDirection={"column"} gap={2} align={"center"}>
                <Image
                  src={"/Georgina Ekeka.jpeg"}
                  width={"150px"}
                  height={"150px"}
                  borderRadius={"full"}
                  alt="executive"
                />
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  Mrs Georgina Ekeka
                </Text>
                <Text fontWeight={400} color={"primary.main"} align={"center"}>
                  Ex Officio South East
                </Text>
              </Flex>{" "}
            </Flex>
          </Flex>

          <Flex
            justify={"center"}
            flexDirection={{ base: "column", lg: "row" }}
            align={"center"}
            gap={{ base: 4, lg: 16 }}
            mt={32}
          >
            <Text
            as={"a"}
            href={loginUrl}
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
              onClick={handleClick}
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
              onClick={handleClick}
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