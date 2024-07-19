"use client";

import { Button, Flex, IconButton, Image, Text, Show, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { CloseSquare, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MemberLogin = () => {
  return (
    <a href="https://bukaa.rel8membership.com/verify-membership" target="_blank" rel="noopener noreferrer">
      <Button fontWeight={600}>Member Login</Button>
    </a>
  );
};


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
            <Flex cursor={"pointer"} align={"center"} gap={"1rem"}>
              <Image src="/log.jpg" w={"40px"} h={"40px"} alt="" />
              <Text fontWeight={600} fontSize={'20px'} color={"secondary.main"}>
                BUUKA
              </Text>
            </Flex>
            <Show above="md">
              <Flex
                gap={"1.5rem"}
                align={"center"}
                fontWeight="500"
                color={"secondary.main"}
              >
                <Link href="#about">About us</Link>
                <Box h={4} w={"2px"} bg={"secondary.main"}></Box>
                <Link href="#mission">Mission</Link>
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
            {/* <Link href="https://bukaa.rel8membership.com/verify-membership">
              <Button fontWeight={600}>Member Login</Button>
            </Link> */}
            <MemberLogin />
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
      <Link href="#about">About us</Link>
      <Link href="#mission">Mission</Link>
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
