'use client'
import { Event } from "@/types";
import { fetchEvents } from "@/utils/fetchEvents";
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from 'react-query';

const EventsComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery<Event[]>('events', fetchEvents);

  console.log(data);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) return <Text>Error loading events</Text>;

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        gap={16}
        my={48}
      >
        <Box position={"relative"}>
          <Text
            color={"primary.main"}
            fontSize={"16px"}
            fontWeight={500}
            zIndex={40}
            position={"relative"}
          >
            EVENTS
          </Text>
          <Flex
            justify={"center"}
            align={"center"}
            flexDirection={"column"}
            position={"absolute"}
            whiteSpace={"nowrap"}
            textAlign={"center"}
            top={"-50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            zIndex={0}
          >
            <Box h={"50px"} w={"2px"} bg={"secondary.sub_"}></Box>
            <Text
              color={"secondary.sub_"}
              textAlign={"center"}
              fontSize={"60px"}
              fontWeight={300}
            >
              Events
            </Text>
          </Flex>
        </Box>

        <Flex
          justifyContent={"center"}
          textAlign={"center"}
          align={"center"}
          w={{ base: "80%", lg: "50%" }}
        >
          <Text color={"primary.main"}>
          Education is the most powerful weapon which you can use to change the world. – Nelson Mandela
          </Text>
        </Flex>

        <Flex justifyContent={"center"} textAlign={"center"} align={"center"} w={{ base: "80%", lg: "100%" }} flexWrap={"wrap"} gap={"50px"}>
          {data?.map((event) => (
            <Flex
              key={event.id}
              flexDirection="column"
              width={{ base: "100%", lg: "25%" }}
              height={"550px"}
              boxShadow={"lg"}
              rounded={"lg"}
            >
              <Link href={`/events/${event.id}`}>
                <Box height={"60%"}>
                  <Image
                    src={event.image || '/default-image.png'}
                    roundedTop={"lg"}
                    height={"100%"}
                    width={"100%"}
                    alt={event.name}
                  />
                </Box>
                <Flex flexDirection={"column"} gap={2} align={"center"} p={4} height={"0%"}>
                  <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                    {event.name}
                  </Text>
                  <Flex flexDirection={"column"} gap={2} align={"start"} w={"100%"}>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Start Date: {new Date(event.startDate).toLocaleDateString()}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Start Time: {event.startTime}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Amount: {event.amount}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Organiser: {event.organiser_name}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Paid Event: {event.is_paid_event ? 'Yes' : 'No'}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Virtual Event: {event.is_virtual ? 'Yes' : 'No'}
                    </Text>
                    <Text fontWeight={400} color={"primary.main"} align={"start"}>
                      Extra Info: {event.event_extra_details}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default EventsComponent;
