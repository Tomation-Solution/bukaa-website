"use client";

import { Button, Flex, IconButton, Image, Text, Show, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { CloseSquare, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      direction={"column"}
      position={"fixed"}
      top={0}
      zIndex={50}
      w={"100vw"}
    >
      <Flex
        px={"8%"}
        py={"1rem"}
        justify={"space-between"}
        align={"center"}
        borderBottomWidth={1}
        w={"100%"}
        bg={"white"}
        gap="2ewm"
      >
        <Link href={"/"}>
          <Flex cursor={"pointer"} align={"center"} gap={"5rem"}>
            <Text
              fontSize={"1.6rem"}
              fontWeight={"bold"}
              color={"secondary.main"}
            >
              LOGO
            </Text>
            <Show above="md">
              <Flex
                gap={"1.5rem"}
                align={"center"}
                fontWeight="500"
                color={"secondary.main"}
              >
                <Link href="/">About us</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="/">Mission</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="/events">Events</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="/news">News</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="/">Gallery</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="/publication">Publications</Link>
              </Flex>
            </Show>
          </Flex>
        </Link>

        <Flex
          gap={"2rem"}
          align={"center"}
          fontWeight="500"
          color={"secondary.main"}
        >
          <Show above="md">
            <Link href="#contact">
              <Text fontWeight={600}>Contact Sales</Text>
            </Link>
          </Show>

          <Show above="md">
            <Link href="#contact">
              <Button fontWeight={600}>Member Login</Button>
            </Link>
          </Show>

          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            display={{ base: "flex", lg: "none" }}
            variant={"sub"}
            px={{ base: "1rem", lg: "1.2rem" }}
            fontSize={"1.2rem"}
            aria-label={"menu"}
            icon={
              <Icon
                as={isOpen ? CloseSquare : (HambergerMenu as any)}
                color={"secondary.sub"}
              />
            }
          />
        </Flex>
      </Flex>
      {isOpen && <HeaderMenu />}
    </Flex>
  );
}

function HeaderMenu() {
  const router = useRouter();

  return (
    <Flex
      gap={".5rem"}
      align={"center"}
      justify={"center"}
      px={"5%"}
      py={"1rem"}
      bg={"white"}
      direction={"column"}
      w={"100%"}
      boxShadow={"2xl"}
      color={"secondary.main"}
    >
      <Link href="/">About us</Link>
      <Link href="/">Mission</Link>
      <Link href="/events">Events</Link>
      <Link href="/news">News</Link>
      <Link href="/">Gallery</Link>
      <Link href="/publication">Publications</Link>
      <Link href="#contact">
        <Text fontWeight={600}>Contact Sales</Text>
      </Link>{" "}
      <Link href="#contact">
        <Button fontWeight={600}>Member Login</Button>
      </Link>
    </Flex>
  );
}
