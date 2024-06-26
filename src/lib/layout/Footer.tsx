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
        <Flex flexDirection={"column"} gap={10}>
          <Image src="/log.jpg" w={"100px"} h={"100px"} alt="" />
          <Text
            fontSize={"1rem"}
            color={"primary.main"}
            w={{ base: "100%", lg: "40%" }}
          >
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
              info@brand.com
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