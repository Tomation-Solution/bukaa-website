'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import { fetchEventById } from '@/utils/fetchEventsById';
import { Event, ApiResponse } from '@/types';

const PublicationDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { data: eventData, error, isLoading } = useQuery<ApiResponse, Error>(['eventData', id], () => fetchEventById(id));

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

      <Flex flexDirection="column" width={{ base: "80%", lg: "50%" }} height={"auto"} boxShadow={"lg"} rounded={"lg"}>
        <Box height={"auto"}>
          <Image src={event.image || '/default-image.jpg'} roundedTop={"lg"} width={"100%"} alt={event.name} />
        </Box>
        <Flex flexDirection={"column"} gap={2} align={"center"} p={4} height={"auto"}>
          <Text fontWeight={600} color={"primary.sub"} align={"center"}>
            {event.name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Organised by: {event.organiser_name}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Address: <a href={event.address} target="_blank" rel="noopener noreferrer">{event.address}</a>
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Amount: {event.is_paid_event ? `${event.amount} (Paid)` : 'Free'}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Start Date: {new Date(event.startDate).toLocaleDateString()}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            Start Time: {event.startTime}
          </Text>
          <Text fontWeight={400} color={"primary.main"} align={"center"}>
            {event.event_extra_details}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PublicationDetail;
