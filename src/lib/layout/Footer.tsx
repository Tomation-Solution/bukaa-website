import { Flex, Text, Image } from "@chakra-ui/react";
import { IoCall, IoMail } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

export function Footer() {

    return (
      <Flex
        px={"8%"}
        py={"2rem"}
        justify={"space-between"}
        borderTopWidth={1}
        w={"100%"}
        className="w-full"
        flexDirection={{ base: "column", lg: "row" }}
        gap={10}
      >
        <Flex flexDirection={"row"} gap={5} justifyContent={'center'} alignItems={'center'}>
          <Image src="/log.jpg" w={"100px"} h={"100px"} alt="" />
          <Text fontWeight={600} fontSize={"24px"} color={"secondary.main"}>
            BUUKA
          </Text>
        </Flex>
        <Flex flexDirection={"column"} align={"start"} gap={2}>
          <Flex
            align={"center"}
            justify={"start"}
            gap={2}
            whiteSpace={"nowrap"}
          >
            <IoCall color="#252525" />
            <Text fontSize={"1rem"} color={"primary.main"}>
              +234 445 4454 334
            </Text>
          </Flex>

          <Flex
            align={"center"}
            justify={"start"}
            gap={2}
            whiteSpace={"nowrap"}
          >
            <IoMail color="#252525" />
            <Text fontSize={"1rem"} color={"primary.main"}>
              info@bukaa.com
            </Text>
          </Flex>

          <Flex
            align={"center"}
            justify={"start"}
            gap={2}
            whiteSpace={"nowrap"}
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
          >
            <SiAppstore color="#252525" />
            <Text fontSize={"1rem"} color={"primary.main"}>
              Get membership app for ios
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
}