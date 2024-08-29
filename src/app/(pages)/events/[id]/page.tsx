'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery, useMutation } from 'react-query';
import { Text, Flex, Box, Image, Spinner, Input, Button, Select, useMediaQuery, useToast } from "@chakra-ui/react";
import { fetchEventById } from '@/utils/fetchEventsById';
import { registerForEvent } from '@/utils/RegisterForEvent';
import { Event, ApiResponse, ApiError } from '@/types';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign } from 'react-icons/fa';
import { MdOutlineEventAvailable, MdOutlineEventBusy } from 'react-icons/md';
import { FaNairaSign } from "react-icons/fa6";
import { initiatePayment } from '@/utils/eventsPayment';
import { NEXT_PUBLIC_MEMBER_LOGIN_URL } from "@/config/config";

const EventDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const toast = useToast();
  const { data: eventData, error, isLoading } = useQuery<ApiResponse, ApiError>(['eventData', id], () => fetchEventById(id));
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isMember, setIsMember] = useState('');
  const [isLargerScreen] = useMediaQuery("(min-width: 768px)");
  const loginUrl = NEXT_PUBLIC_MEMBER_LOGIN_URL;

  useEffect(() => {
    if (isMember === 'yes') {
      toast({
        title: 'Please register for the event through the membership portal',
        status: 'info',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [isMember, toast]);

  const mutation = useMutation(registerForEvent, {
    onSuccess: () => {
      toast({
        title: 'Registration successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setFullName('');
      setEmail('');
      setIsMember('');
    },
    onError: (error: ApiError) => {
      let errorMessage = 'Registration failed';
      let toastStatus: 'error' | 'info' = 'error';

      if (error.message && typeof error.message === 'object' && 'error' in error.message) {
        errorMessage = (error.message as { error: string }).error;
        if (errorMessage === 'You need to pay for this event!') {
          toastStatus = 'info';
        }
      } else if (error.message === 'Validation Error' && error.data && error.data.email) {
        errorMessage = error.data.email[0];
      }

      toast({
        title: toastStatus === 'info' ? 'Information' : 'Registration failed',
        description: errorMessage,
        status: toastStatus,
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('event_id', id);
    formData.append('full_name', fullName);
    formData.append('email', email);

    if (eventData?.data?.is_paid_event) {
      try {
        const paymentResponse = await initiatePayment({
          amount: eventData.data.amount,
          email: email,
          fullname: fullName,
          event_id: id,
          callback_url: `${window.location.origin}/paymentcallback?event_id=${id}&amount=${eventData.data.amount}&email=${email}&fullname=${fullName}`,
        });
        console.log(paymentResponse);

        if (paymentResponse.success) {
          // Redirect to Paystack checkout
          window.location.href = paymentResponse.data.data.authorization_url;
        }
      } catch (error: any) {
        toast({
          title: 'Payment failed',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } else {
      // If the event is free, register directly
      mutation.mutate(formData);
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text align="center" mt={8}>Error: {error.message}</Text>;
  if (!eventData || !eventData.data) return <Text align="center" mt={8}>No Data Available</Text>;

  const event: Event = eventData.data;

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

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

      <Flex flexDirection={isLargerScreen ? "row" : "column"} width={{ base: "80%", md: "70%", lg: "70%" }} height={{ base: "auto", sm: "auto", md: "380px" }} boxShadow={"lg"} rounded={"lg"} gap={{ base: 0, md: 3, sm: 0 }}>
        <Box height={"auto"} width={isLargerScreen ? "50%" : "100%"}>
          <Image src={event.image || '/default-image.jpg'} roundedTop={"lg"} width={"100%"} height={"100%"} alt={event.name} />
        </Box>
        <Flex flexDirection={"column"} display={"flex"} justifyContent={"space-between"} gap={2} align={"start"} p={4} height={"auto"}>
          <Text fontWeight={600} color={"primary.sub"} align={"center"} fontSize={isLargerScreen ? "2xl" : "md"}>
            {event.name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            {event.is_active ? <MdOutlineEventAvailable /> : <MdOutlineEventBusy />} Status: {event.is_active ? 'Active' : 'Inactive'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            <FaMapMarkerAlt /><a href={event.address} target="_blank" rel="noopener noreferrer">{event.address}</a>
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            <FaCalendarAlt />{new Date(event.startDate).toLocaleDateString()}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            <FaClock />{event.startTime}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            <FaNairaSign /> Amount: {event.is_paid_event ? `${formatAmount(parseFloat(event.amount))} (Paid)` : 'Free'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            Virtual Event: {event.is_virtual ? 'Yes' : 'No'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            Organised by: {event.organiser_name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"start"} display="flex" alignItems="center" gap={2}>
            Organiser Contact: {event.organiser_extra_info}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} width={{ base: "80%", lg: "40%" }} height={"auto"} boxShadow={"lg"} rounded={"lg"} mt={8} p={4}>
        <Text fontWeight={600} color={"primary.sub"} align={"center"} mb={5} fontSize={isLargerScreen ? "2xl" : "md"}>
          Register for Event
        </Text>
        <Select placeholder="Are you a member?" value={isMember} onChange={(e) => setIsMember(e.target.value)} mb={4}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
        {isMember && (isMember === 'yes' ? (
          <a href={loginUrl}>
            <Button colorScheme="blue" mt={5} variant="outline" size='md' width={"30%"}>
              Login
            </Button>
          </a>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input 
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              mb={4}
            />
            <Input 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={4}
            />
            <Button type="submit" px="8" mt={5} colorScheme="blue" variant="outline" size='md' width={"30%"} isLoading={mutation.isLoading}>
              Register
            </Button>
          </form>
        ))}
      </Flex>
    </Flex>
  );
};

export default EventDetails;