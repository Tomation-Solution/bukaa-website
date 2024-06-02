import type {ComponentStyleConfig} from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
    baseStyle: {
        borderColor: "none",
            bg: "yellow",
        _input: {
            // borderWidth: 1,
        }
    },
    variants: {
        main: {
            _input: {
                borderWidth: 1,
                bg: "yellow",
            }
        },
    },
    defaultProps: {
        // variant: "main"
    }
};
