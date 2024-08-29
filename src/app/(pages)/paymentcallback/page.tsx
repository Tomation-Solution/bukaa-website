// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { Text, Flex, Button, useToast } from '@chakra-ui/react';
// import { registerForEvent } from '@/utils/RegisterForEvent';
// import { ApiError } from '@/types';
// import { useMutation } from 'react-query';

// export default function Event() {
//   const toast = useToast();

//   // Extract query parameters from the URL
//   const [queryParams, setQueryParams] = useState<{ [key: string]: string } | null>(null);

//   useEffect(() => {
//     const { search } = window.location;
//     const params = new URLSearchParams(search);
//     const query = Object.fromEntries(params.entries());
//     setQueryParams(query);
//   }, []);

//   const mutation = useMutation(registerForEvent, {
//     onSuccess: () => {
//       toast({
//         title: 'Registration successful',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//         position: 'top-right',
//       });
//     },
//     onError: (error: ApiError) => {
//       toast({
//         title: 'Registration failed',
//         description: error.message,
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//         position: 'top-right',
//       });
//     },
//   });

//   useEffect(() => {
//     if (queryParams && queryParams.reference) {
//       const formData = new FormData();
//       formData.append('event_id', queryParams.event_id);
//       formData.append('full_name', queryParams.fullname);
//       formData.append('email', queryParams.email);
//       formData.append('paystack_key', queryParams.reference); // Assuming you use reference as paystack_key

//       mutation.mutate(formData);
//     }
//   }, [queryParams]);

//   return (
//     <Flex justify={'center'} align={'center'} flexDirection={'column'} gap={16} my={48}>
//       <Text textAlign={"center"} fontWeight={500}>
//         The Event payment was successful
//       </Text>
//       <Button onClick={() => window.location.href = `/events/${queryParams?.event_id}`} colorScheme={'primary'}>
//         Go Back
//       </Button>
//     </Flex>
//   );
// }
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Text, Flex, Button, useToast, Box, Icon } from '@chakra-ui/react';
import { registerForEvent } from '@/utils/RegisterForEvent';
import { ApiError } from '@/types';
import { useMutation } from 'react-query';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Event() {
  const toast = useToast();
  const [queryParams, setQueryParams] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const query = Object.fromEntries(params.entries());
    setQueryParams(query);
  }, []);

  const mutation = useMutation(registerForEvent, {
    onSuccess: () => {
      toast({
        title: 'Registration successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: (error: ApiError) => {
      toast({
        title: 'Registration failed',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  useEffect(() => {
    if (queryParams && queryParams.reference) {
      const formData = new FormData();
      formData.append('event_id', queryParams.event_id);
      formData.append('full_name', queryParams.fullname);
      formData.append('email', queryParams.email);
      formData.append('paystack_key', queryParams.reference);

      mutation.mutate(formData);
    }
  }, [queryParams]);

  return (
    <Flex
      justify={'center'}
      align={'center'}
      flexDirection={'column'}
      gap={8}
      // my={24}
      my={28}
      p={4}
      // bg={'gray.50'}
      // borderRadius={'md'}
      // boxShadow={'lg'}
    >
      <Icon
        as={CheckCircleIcon}
        w={12}
        h={12}
        color={'green.400'}
        mb={4}
      />
      <Text
        textAlign={"center"}
        fontWeight={600}
        fontSize={'lg'}
        color={'green.500'}
        mb={6}
      >
        The event payment was successful
      </Text>
      <Button
        onClick={() => window.location.href = `/events/${queryParams?.event_id}`}
        colorScheme={'teal'}
        variant={'solid'}
        size={'lg'}
        px={8}
        py={6}
      >
        Go Back
      </Button>
    </Flex>
  );
}
