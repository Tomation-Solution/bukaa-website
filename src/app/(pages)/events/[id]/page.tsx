'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery, useMutation } from 'react-query';
import { Text, Flex, Box, Image, Spinner, Input, Button, Select, useMediaQuery, useToast } from "@chakra-ui/react";
import { fetchEventById } from '@/utils/fetchEventsById';
import { registerForEvent } from '@/utils/RegisterForEvent';
import { Event, ApiResponse, ApiError } from '@/types';

const EventDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const toast = useToast();
  const { data: eventData, error, isLoading } = useQuery<ApiResponse, Error>(['eventData', id], () => fetchEventById(id));
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isMember, setIsMember] = useState('');
  const [isLargerScreen] = useMediaQuery("(min-width: 768px)");
  const loginUrl = process.env.NEXT_PUBLIC_MEMBER_LOGIN_URL;

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
    onError: (error: unknown) => {
      let errorMessage = 'Registration failed';
      const apiError = error as ApiError;
      if (apiError.message) {
        errorMessage = apiError.message;
      }
      if (apiError.data && apiError.data.email) {
        errorMessage = apiError.data.email[0];
      }
      toast({
        title: 'Registration failed',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event_id', id);
    formData.append('full_name', fullName);
    formData.append('email', email);
    mutation.mutate(formData);
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text align="center" mt={8}>Error: {(error as Error).message}</Text>;
  if (!eventData || !eventData.data) return <Text align="center" mt={8}>No Data Available</Text>;

  const event: Event = eventData.data;

  return (
    <Flex justify={"center"} align={"center"} flexDirection={"column"} gap={16} my={48}>
      <Box position={"relative"}>
        <Text color={"primary.main"} fontSize={"16px"} fontWeight={500} zIndex={40} position={"relative"}>
          EVENT DETAILS
        </Text>
        <Flex justify={"center"} align={"center"} flexDirection={"column"} position={"absolute"} whiteSpace={"nowrap"} textAlign={"center"} top={"-50%"} left={"50%"} transform={"translate(-50%, -50%)"} zIndex={0}>
          <Box h={"50px"} w={"2px"} bg={"secondary.sub_"}></Box>
          <Text color={"secondary.sub_"} textAlign={"center"} fontSize={"60px"} fontWeight={300}>
            Event
          </Text>
        </Flex>
      </Box>

      <Flex flexDirection={isLargerScreen ? "row" : "column"} width={{ base: "80%", md: "70%", lg: "70%" }} height={"auto"} boxShadow={"lg"} rounded={"lg"}>
        <Box height={"auto"} width={isLargerScreen ? "50%" : "100%"}>
          <Image src={event.image || '/default-image.jpg'} roundedTop={"lg"} width={"100%"} height={"100%"} alt={event.name} />
        </Box>
        <Flex flexDirection={"column"} gap={2} align={"start"} p={4} height={"auto"}>
          <Text fontWeight={600} color={"primary.sub"} align={"center"} fontSize={isLargerScreen ? "2xl" : "md"}>
            {event.name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Status: {event.is_active ? 'Active' : 'Inactive'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Address: <a href={event.address} target="_blank" rel="noopener noreferrer">{event.address}</a>
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Date: {new Date(event.startDate).toLocaleDateString()}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Time: {event.startTime}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Amount: {event.is_paid_event ? `${event.amount} (Paid)` : 'Free'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Virtual Event: {event.is_virtual ? 'Yes' : 'No'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Organised by: {event.organiser_name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"}>
            Organiser's Contact: {event.organiser_extra_info}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} width={{ base: "80%", lg: "40%" }} height={"auto"} boxShadow={"lg"} rounded={"lg"} mt={8} p={4}>
        <Text fontWeight={600} color={"primary.sub"} align={"center"} mb={4} fontSize={isLargerScreen ? "2xl" : "md"}>
          Register for Event
        </Text>
        <Select placeholder="Are you a member?" value={isMember} onChange={(e) => setIsMember(e.target.value)} mb={3}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
        {isMember === 'yes' ? (
          <a href={loginUrl}>
            <Button colorScheme="blue" variant="outline" size='md' width={"30%"}>
              Login
            </Button>
          </a>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input 
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              mb={3}
            />
            <Input 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={3}
            />
            <Button type="submit" px="8" colorScheme="blue" variant="outline" size='md' width={"30%"} isLoading={mutation.isLoading}>
              Register
            </Button>
          </form>
        )}
      </Flex>
    </Flex>
  );
};

export default EventDetails;
