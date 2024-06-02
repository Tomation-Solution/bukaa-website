import {
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';

import customTheme from '../../lib/styles/theme/index';

type ChakraProps = {
  children: React.ReactNode;
};

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode='light'
        type="cookie"
      />
      <ChakraProvider
        theme={customTheme}
      >
        {children}
      </ChakraProvider>
    </>
  );
};
