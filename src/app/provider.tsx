"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Chakra as ChakraProvider } from "../lib/component/Chakra";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>{children}</ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
};

export default Providers;