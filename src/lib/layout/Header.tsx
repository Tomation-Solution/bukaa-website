"use client";

import { Button, Flex, IconButton, Image, Text, Show, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { CloseSquare, HambergerMenu } from "iconsax-react";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useRouter } from "next/navigation";

const MemberLogin = () => {

  const loginUrl = process.env.NEXT_PUBLIC_MEMBER_LOGIN_URL;

  return (
    <a href={loginUrl} target="_blank" rel="noopener noreferrer">
      <Button fontWeight={600}>Member Login</Button>
    </a>
  );
};

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Flex
      direction={"column"}
      position={"fixed"}
      top={0}
      zIndex={50}
      w={"100vw"}
    >
      <Flex
        px={{ base: "4%", md: "8%" }}
        py={"1rem"}
        justify={"space-between"}
        align={"center"}
        borderBottomWidth={1}
        w={"100%"}
        bg={"white"}
      >
        <Link href={"/"}>
          <Flex cursor={"pointer"} align={"center"} gap={{ base: "1rem", md: "5rem" }}>
            <Flex cursor={"pointer"} align={"center"} gap={"1rem"}>
              <Image src="/log.jpg" w={"40px"} h={"40px"} alt="" />
              <Text fontWeight={600} fontSize={{ base: "16px", md: "20px" }} color={"secondary.main"}>
                BUKAA
              </Text>
            </Flex>
            <Show above="md">
              <Flex
                 gap={["1rem", "1rem", "1rem", "1rem", "1.5rem"]}
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
                <Link href="/gallery">Gallery</Link>
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
            <Link href="mailto:info@bukaa.com">
              <Text fontWeight={600}>Contact</Text>
            </Link>
          </Show>

          <Show above="md">
            <MemberLogin />
          </Show>

          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            display={{ base: "flex", md: "none" }}
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
      {isOpen && <HeaderMenu setIsOpen={setIsOpen} dropdownRef={dropdownRef} />}
    </Flex>
  );
}

interface HeaderMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: MutableRefObject<HTMLDivElement | null>;
}

function HeaderMenu({ setIsOpen, dropdownRef }: HeaderMenuProps) {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
      ref={dropdownRef}
    >
      <Link href="#about" onClick={handleLinkClick}>About us</Link>
      <Link href="#mission" onClick={handleLinkClick}>Mission</Link>
      <Link href="/events" onClick={handleLinkClick}>Events</Link>
      <Link href="/news" onClick={handleLinkClick}>News</Link>
      <Link href="/gallery" onClick={handleLinkClick}>Gallery</Link>
      <Link href="/publication" onClick={handleLinkClick}>Publications</Link>
      <Link href="mailto:info@bukaa.com" onClick={handleLinkClick}>
        <Text fontWeight={600}>Contact</Text>
      </Link>
      <MemberLogin />
    </Flex>
  );
}
