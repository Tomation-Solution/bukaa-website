import type {DeepPartial, Theme} from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, any>> = {
  secondary: {
    main: "#525252",
    sub: "#rgb(81,81,81)",
    sub_: "#E9E9E9",
    sub__: "#EEEEEE",
  },
  primary: {
    main: "#525252",
    sub: "#252525",
    sub_: "#838383",
    sub__: "#252525",
    sub___: "#01559533",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
    ...overridenChakraColors,
    ...extendedColors,
};
