'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";

// Define the type for the gallery data
interface GalleryImage {
  id: string;
  image: string;
}

interface GalleryData {
  name: string;
  date_taken: string;
  images: GalleryImage[];
}

const fetchGalleryById = async (id: string) => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME; 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/extras/gallery_version2/unauthorized_images/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  if (result.status_code !== 200) {
    throw new Error(result.message || "Failed to fetch data");
  }
  return result.data as GalleryData; // Cast result.data to the expected type
};

const GalleryViewById: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { data: galleryData, error, isLoading } = useQuery<GalleryData, Error>(['galleryData', id], () => fetchGalleryById(id));

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text align="center" mt={8}>Error: {error.message}</Text>;
  if (!galleryData) return <Text align="center" mt={8}>No Data Available</Text>;

  return (
    <Flex justify={"center"} align={"center"} flexDirection={"column"} gap={16} my={48}>
      <Box position={"relative"}>
        <Text color={"primary.main"} fontSize={"16px"} fontWeight={500} zIndex={40} position={"relative"}>
          {galleryData.name}
        </Text>
        <Flex justify={"center"} align={"center"} flexDirection={"column"} position={"absolute"} whiteSpace={"nowrap"} textAlign={"center"} top={"-50%"} left={"50%"} transform={"translate(-50%, -50%)"} zIndex={0}>
          <Box h={"50px"} w={"2px"} bg={"secondary.sub_"}></Box>
          <Text color={"secondary.sub_"} textAlign={"center"} fontSize={"60px"} fontWeight={300}>
            {galleryData.name}
          </Text>
        </Flex>
      </Box>

      <Flex justifyContent={"center"} textAlign={"center"} align={"center"} w={{ base: "80%", lg: "50%" }}>
        <Text color={"primary.main"}>
          Date Taken: {new Date(galleryData.date_taken).toLocaleDateString()}
        </Text>
      </Flex>

      <Flex justifyContent={"center"} textAlign={"center"} align={"center"} w={{ base: "80%", lg: "100%" }} flexWrap={"wrap"} gap={"50px"}>
        {galleryData.images.map((image: GalleryImage) => (
          <Box key={image.id} width={{ base: "100%", lg: "25%" }} height={"280px"} boxShadow={"lg"} rounded={"lg"}>
            <Image src={image.image} roundedTop={"lg"} height={"100%"} width={"100%"} alt={`Image ${image.id}`} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default GalleryViewById;
