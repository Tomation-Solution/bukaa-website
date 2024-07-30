'use client';
import React from 'react';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import { DocumentDownload } from "iconsax-react";
import { fetchPublications } from '@/utils/fetchPublications';
import { Publication } from '@/types';

const PublicationComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery<Publication[]>('publications', fetchPublications);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }
  
  if (error) return <Text>Error loading publications</Text>;

  return (
    <Flex justify={"center"} align={"center"} flexDirection={"column"} gap={16} my={48}>
      <Box position={"relative"}>
        <Text color={"primary.main"} fontSize={"16px"} fontWeight={500} zIndex={40} position={"relative"}>
          PUBLICATION
        </Text>
        <Flex justify={"center"} align={"center"} flexDirection={"column"} position={"absolute"} whiteSpace={"nowrap"} textAlign={"center"} top={"-50%"} left={"50%"} transform={"translate(-50%, -50%)"} zIndex={0}>
          <Box h={"50px"} w={"2px"} bg={"secondary.sub_"}></Box>
          <Text color={"secondary.sub_"} textAlign={"center"} fontSize={"60px"} fontWeight={300}>
            Publication
          </Text>
        </Flex>
      </Box>

      <Flex justifyContent={"center"} textAlign={"center"} align={"center"} w={{ base: "80%", lg: "100%" }} flexWrap={"wrap"} gap={"50px"}>
        {data?.map((publication) => (
          <Flex
            key={publication.id}
            flexDirection="column"
            width={{ base: "100%", lg: "25%" }}
            height={"420px"}
            boxShadow={"lg"}
            rounded={"lg"}
          >
            <Link href={`/publication/${publication.id}`}>
              <Box height={"60%"}>
                <Image
                  src={publication.image}
                  roundedTop={"lg"}
                  height={"250px"}
                  width={"100%"}
                  alt={publication.name}
                />
              </Box>
              <Flex flexDirection={"column"} gap={2} align={"center"} p={4} height={"40%"}>
                <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                  {publication.name}
                </Text>
                <Flex flexDirection={"column"} gap={2} align={"start"} w={"100%"}>
                  <Text fontWeight={400} color={"primary.main"} align={"start"}>
                    Date Released: {new Date(publication.created_at).toLocaleDateString()}
                  </Text>
                  <Text fontWeight={400} color={"primary.main"} align={"start"}>
                    Views: 20
                  </Text>
                  <Text fontWeight={400} color={"primary.main"} align={"start"}>
                    Download: <DocumentDownload size="16" color="#FF8A65" cursor={"pointer"} />
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default PublicationComponent;
