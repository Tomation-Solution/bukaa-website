'use client'
import { fetchNews } from "@/utils/fetchNews";
import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from 'react-query';
import { NewsItems } from '@/types';

const News = () => {
  const { data, error, isLoading } = useQuery<NewsItems[]>('news', fetchNews);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

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
            NEWS
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
              News
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
            The University shall be the leading institution in the development
            and promotion of a comprehensive and integrated system of functional
            education that is in line with the values and aspirations of its
            host community and the nation.
          </Text>
        </Flex>

        <Flex justifyContent={"center"} textAlign={"center"} align={"center"} w={{ base: "80%", lg: "100%" }} flexWrap={"wrap"} gap={"50px"}>
          {data?.map((news) => (
            <Flex
              key={news.id}
              flexDirection="column"
              width={{ base: "100%", lg: "25%" }}
              height={"420px"}
              boxShadow={"lg"}
              rounded={"lg"}
            >
              <Link href={`/news/${news.id}`}>
                <Box height={"60%"}>
                  <Image
                    src={news.image || '/default-image.png'}
                    roundedTop={"lg"}
                    height={"250px"}
                    width={"100%"}
                    alt={news.name}
                  />
                </Box>
                <Flex flexDirection={"column"} gap={2} align={"center"} p={4} height={"40%"}>
                  <Text fontWeight={600} color={"primary.sub"} align={"center"}>
                    {news.name}
                  </Text>
                  <Text fontWeight={400} color={"primary.main"} align={"start"}>
                    {truncateText(news.body, 100)} <Link href={`/news/${news.id}`}>Read more</Link>
                  </Text>
                </Flex>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default News;
