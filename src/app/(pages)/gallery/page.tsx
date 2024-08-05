'use client';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Image, Spinner, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { fetchGalleryData } from '@/utils/fetchGalleryData';
import { GalleryFolder, GalleryData } from '@/types';

const GalleryPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: galleryData, error, isLoading } = useQuery<GalleryData, Error>(['galleryData', page], () => fetchGalleryData(page));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < (galleryData?.pages_number || 1)) {
      setPage(page + 1);
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Flex justify={'center'} align={'center'} flexDirection={'column'} gap={16} my={48}>
      <Box position={'relative'}>
        <Text color={'primary.main'} fontSize={'16px'} fontWeight={500} zIndex={40} position={'relative'}>
          GALLERY
        </Text>
        <Flex justify={'center'} align={'center'} flexDirection={'column'} position={'absolute'} whiteSpace={'nowrap'} textAlign={'center'} top={'-50%'} left={'50%'} transform={'translate(-50%, -50%)'} zIndex={0}>
          <Box h={'50px'} w={'2px'} bg={'secondary.sub_'}></Box>
          <Text color={'secondary.sub_'} textAlign={'center'} fontSize={'60px'} fontWeight={300}>
            Gallery
          </Text>
        </Flex>
      </Box>

      <Flex justifyContent={'center'} textAlign={'center'} align={'center'} w={{ base: '80%', lg: '50%' }}>
        <Text color={'primary.main'}>
          A glimpse into the vibrant life and culture at Bayero University, Kano, where knowledge meets tradition, and innovation thrives. Our gallery showcases the rich tapestry of academic excellence, student life, and the diverse experiences that shape our community.
        </Text>
      </Flex>

      <Flex justifyContent={'center'} textAlign={'center'} align={'center'} w={{ base: '80%', lg: '100%' }} flexWrap={'wrap'} gap={'50px'}>
        {galleryData?.data?.map((folder: GalleryFolder) => (
          <Flex key={folder.id} flexDirection="column" width={{ base: '100%', lg: '25%' }} height={'100%'} boxShadow={'lg'} rounded={'lg'}>
            <Link href={`/gallery/${folder.id}`}>
              <Box height={{ base: "auto", sm: "auto", md: "280px" }}>
                <Image src={folder.images[0]?.image || '/default-image.jpeg'} roundedTop={'lg'} height={'100%'} width={'100%'} alt={folder.name} />
              </Box>
              <Flex flexDirection={'column'} gap={2} align={'center'} p={4} height={'40%'}>
                <Text fontWeight={600} color={'primary.sub'} align={'center'} fontSize={'22px'}>
                  {folder.name}
                </Text>
                <Text fontWeight={400} color={'primary.main'} align={'center'}>
                  {new Date(folder.date_taken).toLocaleDateString()}
                </Text>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>

      <Flex justifyContent={'center'} gap={4}>
        <Button onClick={handlePrevious} disabled={page === 1} colorScheme="blue" variant="outline" size='lg'>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={page === galleryData?.pages_number} colorScheme="blue" variant="outline" size='lg'>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default GalleryPage;
