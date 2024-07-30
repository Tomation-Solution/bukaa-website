'use client';
import React from 'react';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Image, Spinner } from '@chakra-ui/react';
import Link from 'next/link';

interface GalleryImage {
  id: number;
  image: string;
}

interface GalleryFolder {
  id: number;
  name: string;
  date_taken: string;
  images: GalleryImage[];
}

const fetchGalleryData = async (): Promise<GalleryFolder[]> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME; 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 

  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/extras/gallery_version2/get_unauthorized_images/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  if (result.status_code !== 200) {
    throw new Error(result.message || 'Failed to fetch data');
  }
  return result.data.data as GalleryFolder[];
};

const GalleryPage: React.FC = () => {
  const { data: galleryData, error, isLoading } = useQuery<GalleryFolder[], Error>('galleryData', fetchGalleryData);

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
        {galleryData?.map((folder) => (
          <Flex key={folder.id} flexDirection="column" width={{ base: '100%', lg: '25%' }} height={'100%'} boxShadow={'lg'} rounded={'lg'}>
            <Link href={`/gallery/${folder.id}`}>
              <Box height={'60%'}>
                <Image src={folder.images[0]?.image || '/default-image.jpeg'} roundedTop={'lg'} height={'100%'} width={'100%'} alt={folder.name} />
              </Box>
              <Flex flexDirection={'column'} gap={2} align={'center'} p={4} height={'40%'}>
                <Text fontWeight={600} color={'primary.sub'} align={'center'}>
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
    </Flex>
  );
};

export default GalleryPage;
