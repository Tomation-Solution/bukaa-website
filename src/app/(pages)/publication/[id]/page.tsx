'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import { fetchPublicationById } from '@/utils/fetchPublicationById';
import { PublicationData } from '@/types';

const PublicationDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { data: publicationData, error, isLoading } = useQuery<PublicationData, Error>(['publicationData', id], () => fetchPublicationById(id));

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text align="center" mt={8}>Error: {error.message}</Text>;
  if (!publicationData) return <Text align="center" mt={8}>No Data Available</Text>;

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

      <Flex flexDirection="column" width={{ base: "80%", lg: "50%" }} height={"auto"} boxShadow={"lg"} rounded={"lg"}>
        <Box height={"auto"}>
          <Image src={publicationData.image} roundedTop={"lg"} width={"100%"} alt={publicationData.name} />
        </Box>
        <Flex flexDirection={"column"} gap={2} align={"center"} p={4} height={"auto"}>
          <Text fontWeight={600} color={"primary.sub"} align={"center"}>
            {publicationData.name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Date Released: {new Date(publicationData.created_at).toLocaleDateString()}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            {publicationData.body}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PublicationDetail;
