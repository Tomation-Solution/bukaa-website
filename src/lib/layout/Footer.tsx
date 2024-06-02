import {Flex, Text} from "@chakra-ui/react";
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
        <Flex flexDirection={"column"} gap={3}>
          <Text
            fontSize={"1.6rem"}
            fontWeight={"bold"}
            color={"secondary.main"}
          >
            LOGO
          </Text>
          <Text fontSize={"1rem"} color={"primary.main"} w={{base:"100%", lg:"40%"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            explicabo. Rerum voluptas ut recusandae est, asperiores fugit
            temporibus voluptates obcaecati nisi nihil quasi doloremque maiores
            aperiam tempora magnam dolorem omnis?
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